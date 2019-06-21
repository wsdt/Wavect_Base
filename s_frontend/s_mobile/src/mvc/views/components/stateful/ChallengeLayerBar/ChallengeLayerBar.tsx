import AsyncStorage from "@react-native-community/async-storage"
import React from "react"
import { Alert, View } from "react-native"
import { Text } from "react-native-elements"
import { functionalityNotAvailable } from "../../../../controllers/WarningsController"

import { MajorBtnType, MajorButton } from "../../functional/MajorButton/MajorButton"
import styles from "./ChallengeLayerBar.css"
import { IChallengeLayerBarProps } from "./ChallengeLayerBar.props"
import { IChallengeLayerBarState } from "./ChallengeLayerBar.state"

// Key for persisting locally
const CHALLENGE_ACCEPTED_ID = "challenge_accepted_id"
const CHALLENGE_ACCEPTED_DATETIME = "challenge_accepted_datetime"

export class ChallengeLayerBar extends React.PureComponent<IChallengeLayerBarProps, IChallengeLayerBarState> {
    public state: IChallengeLayerBarState = {
        currChallengeAccepted: null,
        lastChallengeIdAccepted: "",
        lastChallengeAcceptedDatetime: "",
    }

    public render() {
        const { headline, subline, expirationInMs, challengeId } = this.props

        if (this.state.currChallengeAccepted == null) {
            this.retrieveChallengeAccepted(challengeId)
        }

        return (
            <View style={styles.mainComponent}>
                <View style={styles.bottomActionContainer}>
                    <Text style={styles.headline}>{headline}</Text>
                    <Text style={styles.subline}>{subline}</Text>

                    <View style={styles.btnContainer}>{this.getBtnRow(expirationInMs, challengeId)}</View>
                </View>
            </View>
        )
    }

    private getBtnRow = (expirationInMs: number, challengeId: string) => {
        if (this.state.currChallengeAccepted) {
            // TODO: Add on press for trigger backend challenge solved
            return (
                <>
                    <Text>{this.msToFormattedStr(expirationInMs)} übrig</Text>
                    <MajorButton title="Abschließen" btnType={MajorBtnType.PRIMARY} />
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
                <MajorButton title="Annehmen" btnType={MajorBtnType.PRIMARY} onPress={() => this.execBtnAccept(expirationInMs, challengeId)} />
            </>
        )
    }

    private execBtnAccept = (expirationInMs: number, challengeId: string) => {
        // Save status locally
        this.storeChallengeAccepted(challengeId)

        Alert.alert(
            "Challenge Accepted",
            `Du hast nun ${this.msToFormattedStr(expirationInMs)} Zeit, um die Challenge zu lösen!`,
            [{ text: "Verstanden" }],
            {
                cancelable: true,
            }
        )
    }

    private retrieveChallengeAccepted = async (challengeId: string) => {
        try {
            let currChallengeAccepted: boolean = false

            console.log("######## retrieve")
            if (this.state.lastChallengeIdAccepted !== null && this.state.lastChallengeAcceptedDatetime !== null) {
                // vals previously stored

                console.log("########## vals stored -> " + this.state.lastChallengeIdAccepted + " // " + challengeId)

                if (this.state.lastChallengeIdAccepted === challengeId) {
                    // current challenge already accepted

                    console.log("######### accepted")

                    currChallengeAccepted = true
                }
            }

            this.setState({
                lastChallengeIdAccepted: await AsyncStorage.getItem(CHALLENGE_ACCEPTED_ID),
                lastChallengeAcceptedDatetime: await AsyncStorage.getItem(CHALLENGE_ACCEPTED_DATETIME),
                currChallengeAccepted: currChallengeAccepted,
            })
        } catch (e) {
            console.error(e)
        }
    }

    private storeChallengeAccepted = async (challengeId: string) => {
        console.log("chall id - " + challengeId)

        try {
            await AsyncStorage.setItem(CHALLENGE_ACCEPTED_ID, challengeId)
            await AsyncStorage.setItem(CHALLENGE_ACCEPTED_DATETIME, new Date().toString())
        } catch (e) {
            console.error(e)
        }
    }

    private msToFormattedStr = (ms: number): string => {
        let day, hours, minute, seconds
        seconds = Math.floor(ms / 1000)
        minute = Math.floor(seconds / 60)
        seconds = seconds % 60
        hours = Math.floor(minute / 60)
        minute = minute % 60
        day = Math.floor(hours / 24)
        hours = hours % 24
        return `${day} Tage, ${hours} Stunden, ${minute} Minuten, ${seconds} Sekunden`
    }
}
