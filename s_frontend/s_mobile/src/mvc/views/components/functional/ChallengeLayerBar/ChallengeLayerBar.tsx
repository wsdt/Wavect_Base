import React from "react"
import {View} from "react-native"
import {Button, Text} from "react-native-elements"
import ChallengeType from "../ChallengeType/ChallengeType"
import {MajorBtnType, MajorButton} from "../MajorButton/MajorButton"
import styles from "./ChallengeLayerBar.css"
import {IChallengeBottomBarProps} from "./ChallengeLayerBar.props"

export const ChallengeLayerBar: React.FunctionComponent<IChallengeBottomBarProps> = props => {
    // just need to get the icon..
    const { headline, subline, company, icon } = props

    return (
        <View style={styles.mainComponent}>
            <View style={styles.topLeftCompany}>
                <Button title={company} type="outline" titleStyle={styles.btnTitleWhiteColor} buttonStyle={styles.btnStyleTransparent} />
            </View>

            <ChallengeType type={icon} />

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
