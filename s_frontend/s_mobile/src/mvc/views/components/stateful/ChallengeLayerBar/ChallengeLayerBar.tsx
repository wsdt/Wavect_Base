import AsyncStorage from "@react-native-community/async-storage"
import React from "react"
import { Alert, View } from "react-native"
import { Text } from "react-native-elements"
import { functionalityNotAvailable, noInternetAvailable } from "../../../../controllers/WarningsController"

import { BACKEND_MOBILE_API } from "../../../../../globalConfiguration/globalConfig"
import { ExpirationTimeObj } from "../../../../models/ExpirationTimeObj"
import { MajorBtnType, MajorButton } from "../../functional/MajorButton/MajorButton"
import { CHALLENGE_ACCEPTED_ID, CHALLENGE_EXPIRATION_DATE } from "./ChallengeLayerBar.constants"
import styles from "./ChallengeLayerBar.css"
import { IChallengeLayerBarProps } from "./ChallengeLayerBar.props"
import { IChallengeLayerBarState } from "./ChallengeLayerBar.state"
import { getLocalUserId, getEmailMarked } from "../../../../controllers/LocalStorageController"
import { withNavigation } from "react-navigation"
import { routes } from "../../system/TabRouter/SettingsScreenRouter/SettingsRoutes"

class ChallengeLayerBar extends React.PureComponent<IChallengeLayerBarProps, IChallengeLayerBarState> {
    public state: IChallengeLayerBarState = {
        currChallengeAccepted: null,
        isLoadingChallengeSolved: false,
        remainingMilliseconds: this.props.expirationInMs,
    }

    private static API_ENDPOINT = `${BACKEND_MOBILE_API}/email`

    private lastChallengeIdAccepted: string | null = null
    private lastChallengeExpirationDateTime: string | null = null
    private intervalId!: any

    public render() {
        const { headline, subline, challengeId } = this.props

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
            this.setState({ remainingMilliseconds: this.state.remainingMilliseconds - 1000 })
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
            if (this.lastChallengeExpirationDateTime != null) {
                const persistedLastExpirationDatetime: Date = new Date(this.lastChallengeExpirationDateTime)

                const correctedExpireMs = persistedLastExpirationDatetime.getTime() - Date.now()
                this.setState({ remainingMilliseconds: correctedExpireMs <= 0 ? 0 : Math.round(correctedExpireMs / 1000) * 1000 }) // dividing by 1000 to have a comma as later
            }
            this.startCountdownInterval()
        }
    }

    public componentWillMount(): void {
        if (this.state.currChallengeAccepted) {
            clearInterval(this.intervalId)
        }
    }

    private challengeSolved = async () => {
        this.setState({ isLoadingChallengeSolved: true })
        try {
            const rawResp = await fetch(`${ChallengeLayerBar.API_ENDPOINT}/current/${await getLocalUserId()}`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    sponsorEmail: this.props.sponsorEmail,
                }),
            })

            const res = await rawResp.json()
            if (res.error === null || res.error === undefined) {
                // might return {}
                console.error(res.error)
            } else {
                this.setState({
                    currChallengeAccepted: false,
                    isLoadingChallengeSolved: false,
                })

                Alert.alert(
                    "Sponsor notified",
                    "Wir haben den Sponsor der aktuellen Herausforderung benachrichtigt! Dieser sollte dich bzgl. Sponsoring demnächst kontaktieren.",
                    [{ text: "Super!" }],
                    {
                        cancelable: true,
                    }
                )

                console.log("ChallengeLayerBar:challengeSolved: Sent email to sponsor.")
            }
        } catch (e) {
            console.error(e)
            noInternetAvailable()
        }
    }

    private getBtnRow = (challengeId: string) => {
        if (this.state.currChallengeAccepted) {
            // TODO: Add on press for trigger backend challenge solved
            return (
                <>
                    <Text style={styles.expirationCountdownText} h4>
                        Noch {this.state.remainingMilliseconds / 1000}s
                    </Text>
                    <MajorButton
                        title="Abschließen"
                        btnType={MajorBtnType.HIGHLIGHTED}
                        onPress={this.challengeSolved}
                        isLoading={this.state.isLoadingChallengeSolved}
                    />
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
                <MajorButton title="Annehmen" btnType={MajorBtnType.PRIMARY} onPress={() => this.execBtnAccept(challengeId)} />
            </>
        )
    }

    private execBtnAccept = async (challengeId: string) => {
        if (await getEmailMarked()) {
            console.log("Email exists, gratuliere du mongo")

            // Save status locally
            this.storeChallengeAccepted(challengeId)

            Alert.alert(
                "Challenge Accepted",
                `Du hast nun ${this.msToFormattedStr(this.props.expirationInMs)} Zeit, um die Challenge zu lösen!`,
                [{ text: "Verstanden" }],
                {
                    cancelable: true,
                }
            )
        } else {
            Alert.alert(
                "Einen Moment noch!",
                "Wir benötigen deine E-Mail Adresse damit dich unsere Sponsoren kontaktieren können.   ",
                [{ text: "OK", onPress: () => this.props.navigation.navigate(routes.SettingsScreen) }],
                {
                    cancelable: true,
                }
            )
            //Usability: User leaves the UI Field without pressing OK
            this.props.navigation.navigate(routes.SettingsScreen)
        }
    }

    private retrieveChallengeAccepted = async (challengeId: string) => {
        let currChallengeAccepted: boolean = false
        try {
            this.lastChallengeIdAccepted = await AsyncStorage.getItem(CHALLENGE_ACCEPTED_ID)
            this.lastChallengeExpirationDateTime = await AsyncStorage.getItem(CHALLENGE_EXPIRATION_DATE)

            if (this.lastChallengeIdAccepted !== null && this.lastChallengeExpirationDateTime !== null) {
                // vals previously stored

                if (this.lastChallengeIdAccepted === challengeId) {
                    // current challenge already accepted
                    currChallengeAccepted = true
                }
            }

            this.setState({ currChallengeAccepted })
        } catch (e) {
            console.error(e)
        }
        return currChallengeAccepted
    }

    private storeChallengeExpired = async () => {
        try {
            await AsyncStorage.removeItem(CHALLENGE_ACCEPTED_ID)
            await AsyncStorage.removeItem(CHALLENGE_EXPIRATION_DATE)
            this.setState({ currChallengeAccepted: false })
            console.log("ChallengeLayerBar:storeChallengeExpired: Challenge expired.")
        } catch (e) {
            console.error(e)
        }
    }

    private storeChallengeAccepted = async (challengeId: string) => {
        try {
            await AsyncStorage.setItem(CHALLENGE_ACCEPTED_ID, challengeId)
            await AsyncStorage.setItem(CHALLENGE_EXPIRATION_DATE, new Date(Date.now() + this.props.expirationInMs).toString())
            this.setState({ currChallengeAccepted: true, remainingMilliseconds: this.props.expirationInMs })
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

export default withNavigation(ChallengeLayerBar)
