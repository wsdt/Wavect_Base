import React from "react"
import { Alert, View } from "react-native"
import { Text } from "react-native-elements"
import { functionalityNotAvailable } from "../../../../controllers/WarningsController"
import { ChallengeTypeIcon } from "../ChallengeTypeIcon/ChallengeTypeIcon"
import { CompanyLogo } from "../CompanyLogo/CompanyLogo"
import { MajorBtnType, MajorButton } from "../MajorButton/MajorButton"
import styles from "./ChallengeLayerBar.css"
import { IChallengeLayerBarProps } from "./ChallengeLayerBar.props"

export const ChallengeLayerBar: React.FunctionComponent<IChallengeLayerBarProps> = props => {
    const { headline, subline, companyLogoUri, challengeCategoryUri, isGrayscale } = props

    return (
        <View style={styles.mainComponent}>
            <CompanyLogo companyLogoUri={companyLogoUri} isGrayscale={isGrayscale} />
            <ChallengeTypeIcon type={challengeCategoryUri} />

            <View style={styles.bottomActionContainer}>
                <Text style={styles.headline}>{headline}</Text>
                <Text style={styles.subline}>{subline}</Text>
                <View style={styles.btnContainer}>
                    <MajorButton
                        title="Ablehnen"
                        btnType={MajorBtnType.SECONDARY}
                        onPress={() => functionalityNotAvailable("Aktuell veröffentlichen wir nur eine Herausforderung gleichzeitig.")}
                    />
                    <MajorButton title="Annehmen" btnType={MajorBtnType.PRIMARY} onPress={() => execBtnAccept(props.expirationInMs)} />
                </View>
            </View>
        </View>
    )
}

const execBtnAccept = (expirationInMs: number) => {
    Alert.alert("Challenge Accepted", `Du hast nun ${expirationInMs} Tage Zeit, um die Challenge zu lösen!`, [{ text: "Verstanden" }], {
        cancelable: true,
    })

    // TODO: Save status locally
}
