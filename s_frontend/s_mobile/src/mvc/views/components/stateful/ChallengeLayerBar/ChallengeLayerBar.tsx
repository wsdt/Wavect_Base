import AsyncStorage from "@react-native-community/async-storage"
import React from "react"
import {Alert, View} from "react-native"
import {Text} from "react-native-elements"
import {functionalityNotAvailable} from "../../../../controllers/WarningsController"

import {ExpirationTimeObj} from "../../../../models/ExpirationTimeObj"
import {MajorBtnType, MajorButton} from "../../functional/MajorButton/MajorButton"
import styles from "./ChallengeLayerBar.css"
import {IChallengeLayerBarProps} from "./ChallengeLayerBar.props"
import {IChallengeLayerBarState} from "./ChallengeLayerBar.state"

// Key for persisting locally
const CHALLENGE_ACCEPTED_ID = "challenge_accepted_id"
const CHALLENGE_ACCEPTED_DATETIME = "challenge_accepted_datetime"

export class ChallengeLayerBar extends React.PureComponent<IChallengeLayerBarProps, IChallengeLayerBarState> {
    public state: IChallengeLayerBarState = {
        currChallengeAccepted: null,
        remainingMilliseconds: this.props.expirationInMs
    }

    private lastChallengeIdAccepted: string | null = null
    private lastChallengeAcceptedDatetime: string | null = null
    private intervalId!: any

    public render() {
        const {headline, subline, challengeId} = this.props

        return (
            <View style={styles.mainComponent}>
                <View style={styles.bottomActionContainer}>
                    <Text style={styles.headline}>{headline}</Text>
                    <Text style={styles.subline}>{subline}</Text>

                    <View style={styles.btnContainer}>{this.getBtnRow(challengeId)}</View>
                </View>
            </View>
        )
    }

    private startCountdownInterval = () => {
        this.intervalId = setInterval(() => {
            this.setState({remainingMilliseconds: this.state.remainingMilliseconds - 1000})
            if (this.state.remainingMilliseconds <= 0) {
                clearInterval(this.intervalId) // stop countdown when reaching 0
                this.storeChallengeExpired() // unset challenge accepted lcoally
            }
        }, 1000)
    }

    public componentDidMount = async () => {
        const currChallengeAccepted = await this.retrieveChallengeAccepted(this.props.challengeId)

        if (currChallengeAccepted) {
            // subtract last accepted from today with expirationInMs to make countdown persistent (to avoid restarting it one every startup)
            if (this.lastChallengeAcceptedDatetime != null) {
                const persistedLastAcceptedDatetime:Date = new Date(this.lastChallengeAcceptedDatetime)
                const correctedExpireMs = (persistedLastAcceptedDatetime.getMilliseconds()+this.props.expirationInMs) - new Date().getMilliseconds()
                this.setState({remainingMilliseconds: (correctedExpireMs <= 0 ? 0 : (Math.round(correctedExpireMs/1000)*1000))}) // dividing by 1000 to have a comma as later
            }
            this.startCountdownInterval()
        }
    }


    public componentWillMount(): void {
        if (this.state.currChallengeAccepted) {
            clearInterval(this.intervalId)
        }
    }

    private getBtnRow = (challengeId: string) => {
        if (this.state.currChallengeAccepted) {
            // TODO: Add on press for trigger backend challenge solved
            return (
                <>
                    <Text style={styles.expirationCountdownText}
                          h4>Noch {this.state.remainingMilliseconds / 1000}s</Text>
                    <MajorButton title="Abschließen" btnType={MajorBtnType.HIGHLIGHTED}/>
                </>
            )
        }

        return (
            <>
                <MajorButton
                    title="Ablehnen"
                    btnType={MajorBtnType.SECONDARY}
                    onPress={() => functionalityNotAvailable("Aktuell veröffentlichen wir nur eine Herausforderung gleichzeitig.")}
                />
                <MajorButton title="Annehmen" btnType={MajorBtnType.PRIMARY}
                             onPress={() => this.execBtnAccept(challengeId)}/>
            </>
        )
    }

    private execBtnAccept = (challengeId: string) => {
        // Save status locally
        this.storeChallengeAccepted(challengeId)

        Alert.alert(
            "Challenge Accepted",
            `Du hast nun ${this.msToFormattedStr(this.props.expirationInMs)} Zeit, um die Challenge zu lösen!`,
            [{text: "Verstanden"}],
            {
                cancelable: true,
            }
        )
    }

    private retrieveChallengeAccepted = async (challengeId: string) => {
        let currChallengeAccepted: boolean = false
        try {
            this.lastChallengeIdAccepted = await AsyncStorage.getItem(CHALLENGE_ACCEPTED_ID)
            this.lastChallengeAcceptedDatetime = await AsyncStorage.getItem(CHALLENGE_ACCEPTED_DATETIME)

            if (this.lastChallengeIdAccepted !== null && this.lastChallengeAcceptedDatetime !== null) {
                // vals previously stored

                if (this.lastChallengeIdAccepted === challengeId) {
                    // current challenge already accepted
                    currChallengeAccepted = true
                }
            }

            this.setState({currChallengeAccepted})
        } catch (e) {
            console.error(e)
        }
        return currChallengeAccepted
    }

    private storeChallengeExpired = async () => {
        try {
            await AsyncStorage.removeItem(CHALLENGE_ACCEPTED_ID)
            await AsyncStorage.removeItem(CHALLENGE_ACCEPTED_DATETIME)
            this.setState({currChallengeAccepted: false})
            console.log("ChallengeLayerBar:storeChallengeExpired: Challenge expired.")
        } catch (e) {
            console.error(e)
        }
    }

    private storeChallengeAccepted = async (challengeId: string) => {

        try {
            await AsyncStorage.setItem(CHALLENGE_ACCEPTED_ID, challengeId)
            await AsyncStorage.setItem(CHALLENGE_ACCEPTED_DATETIME, new Date().toString())
            this.setState({currChallengeAccepted: true, remainingMilliseconds: this.props.expirationInMs})
            this.startCountdownInterval()
        } catch (e) {
            console.error(e)
        }
    }

    private msToFormattedStr = (ms: number): string => {
        const expirationObj: ExpirationTimeObj = new ExpirationTimeObj(ms)
        return `${expirationObj.days} Tage, ${expirationObj.hours} Stunden, ${expirationObj.minutes} Minuten, ${expirationObj.seconds} Sekunden`
    }
}
