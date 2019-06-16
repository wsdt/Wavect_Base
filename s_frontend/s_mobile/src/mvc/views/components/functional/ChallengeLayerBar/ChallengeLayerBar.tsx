import React from "react"
import { View } from "react-native"
import { Text } from "react-native-elements"
import { ChallengeTypeIcon } from "../ChallengeTypeIcon/ChallengeTypeIcon"
import { CompanyLogo } from "../CompanyLogo/CompanyLogo"
import { MajorBtnType, MajorButton } from "../MajorButton/MajorButton"
import styles from "./ChallengeLayerBar.css"
import { IChallengeLayerBarProps } from "./ChallengeLayerBar.props"

export const ChallengeLayerBar: React.FunctionComponent<IChallengeLayerBarProps> = props => {
    // just need to get the icon..
    const { headline, subline, companyLogoUri, challengeCategoryUri, isGrayscale } = props

    return (
        <View style={styles.mainComponent}>
            <CompanyLogo companyLogoUri={companyLogoUri} isGrayscale={isGrayscale} />
            <ChallengeTypeIcon type={challengeCategoryUri} />

            <View style={styles.bottomActionContainer}>
                <Text style={styles.headline}>{headline}</Text>
                <Text style={styles.subline}>{subline}</Text>
                <View style={styles.container}>
                    <MajorButton title="Ablehnen" btnType={MajorBtnType.SECONDARY} />
                    <MajorButton title="Annehmen" btnType={MajorBtnType.PRIMARY} />
                </View>
            </View>
        </View>
    )
}
