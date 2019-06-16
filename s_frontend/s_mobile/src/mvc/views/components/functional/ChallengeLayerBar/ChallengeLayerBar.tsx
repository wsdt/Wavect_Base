import React from "react"
import { View } from "react-native"
import { Button, Text } from "react-native-elements"
import styles from "./ChallengeLayerBar.css"
import { IChallengeBottomBarProps } from "./ChallengeLayerBar.props"

export const ChallengeLayerBar: React.FunctionComponent<IChallengeBottomBarProps> = props => {
    // just need to get the icon..
    const { headline, subline, company } = props

    return (
        <View style={styles.mainComponent}>
            <View style={styles.topLeftCompany}>
                <Button title={company} type="outline" titleStyle={styles.btnTitleWhiteColor} buttonStyle={styles.btnStyleTransparent} />
            </View>

            <View style={styles.topRightSymbol}>
                <Button
                    title=""
                    type="outline"
                    titleStyle={styles.btnTitleStandard}
                    buttonStyle={styles.btnStyleTransparent}
                    /** Insert Icon here.. im just too dumb to do it */
                />
            </View>

            <View style={styles.bottomActionContainer}>
                <Text style={styles.headline}>{headline}</Text>
                <Text style={styles.subline}>{subline}</Text>
                <View style={styles.container}>
                    <View style={styles.buttonContainer}>
                        <Button title="Ablehnen" type="outline" titleStyle={styles.btnTitleStandard} buttonStyle={styles.btnStyleWithBorder} />
                    </View>

                    <View style={styles.buttonContainer2}>
                        <Button title="Annehmen" type="outline" titleStyle={styles.btnTitleStandard} buttonStyle={styles.btnStyleWithBorder} />
                    </View>
                </View>
            </View>
        </View>
    )
}
