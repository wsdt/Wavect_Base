import AsyncStorage from "@react-native-community/async-storage"
import React from "react"
import { Alert, View } from "react-native"
import { Text } from "react-native-elements"
import { functionalityNotAvailable } from "../../../../controllers/WarningsController"

import { MajorBtnType, MajorButton } from "../MajorButton/MajorButton"
import styles from "./ChallengeLayerBar.css"
import { IChallengeLayerBarProps } from "./ChallengeLayerBar.props"

// Key for persisting locally
const CHALLENGE_ACCEPTED_ID = "challenge_accepted_id"
const CHALLENGE_ACCEPTED_DATETIME = "challenge_accepted_datetime"

let lastChallengeIdAccepted
let lastChallengeAcceptedDatetime
let currChallengeAccepted: boolean|null = null

export const ChallengeLayerBar: React.FunctionComponent<IChallengeLayerBarProps> = props => {

    const { headline, subline, expirationInMs, challengeId } = props

    if (currChallengeAccepted == null) {
        retrieveChallengeAccepted(challengeId)
    }

    return (
        <View style={styles.mainComponent}>
            <View style={styles.bottomActionContainer}>
                <Text style={styles.headline}>{headline}</Text>
                <Text style={styles.subline}>{subline}</Text>

                <View style={styles.btnContainer}>{getBtnRow(expirationInMs, challengeId)}</View>
            </View>
        </View>
    )
}

const getBtnRow = (expirationInMs: number, challengeId: string) => {
    if (currChallengeAccepted) {
        // TODO: Add on press for trigger backend challenge solved
        return (
            <>
                <Text>{msToFormattedStr(expirationInMs)} übrig</Text>
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
            <MajorButton title="Annehmen" btnType={MajorBtnType.PRIMARY} onPress={() => execBtnAccept(expirationInMs, challengeId)} />
        </>
    )
}

const execBtnAccept = (expirationInMs: number, challengeId: string) => {
    // Save status locally
    storeChallengeAccepted(challengeId)

    Alert.alert("Challenge Accepted", `Du hast nun ${msToFormattedStr(expirationInMs)} Zeit, um die Challenge zu lösen!`, [{ text: "Verstanden" }], {
        cancelable: true,
    })
}

const retrieveChallengeAccepted = async (challengeId: string) => {
    try {
        lastChallengeIdAccepted = await AsyncStorage.getItem(CHALLENGE_ACCEPTED_ID)
        lastChallengeAcceptedDatetime = await AsyncStorage.getItem(CHALLENGE_ACCEPTED_DATETIME)
        if (lastChallengeIdAccepted !== null && lastChallengeAcceptedDatetime !== null) {
            // vals previously stored
            if (lastChallengeIdAccepted === challengeId) {
                // current challenge already accepted
                currChallengeAccepted = true
            }
        } else {
            currChallengeAccepted = false
        }
    } catch (e) {
        console.error(e)
    }
}

const storeChallengeAccepted = async (challengeId: string) => {
    try {
        await AsyncStorage.setItem(CHALLENGE_ACCEPTED_ID, challengeId)
        await AsyncStorage.setItem(CHALLENGE_ACCEPTED_DATETIME, new Date().toString())
    } catch (e) {
        console.error(e)
    }
}

const msToFormattedStr = (ms: number): string => {
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
