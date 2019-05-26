import React, {Component} from "react"
import {View} from "react-native"
import {Button, Text} from "react-native-elements"
import styles from "./BottomChallengeBar.css"
import {IChallengeBottomBarProps} from "./BottomChallengeBar.props"

class BottomChallengeBar extends Component<IChallengeBottomBarProps, any> {
    public render() {
        const {headline, subline} = this.props

        return (
            <View style={styles.topLevel}>
                <Text style={styles.headline}>{headline}</Text>
                <Text style={styles.subline}>{subline}</Text>
                <View style={styles.container}>
                    <Button
                        title="Ablehnen"
                        type="outline"
                        titleStyle={styles.btnTitle}
                        containerStyle={styles.btnContainer}
                        buttonStyle={styles.btnStyle}
                    />
                    <Button
                        title="Annehmen"
                        type="outline"
                        titleStyle={styles.btnTitle}
                        containerStyle={styles.btnContainer}
                        buttonStyle={styles.btnStyle}
                    />
                </View>
            </View>
        )
    }
}


export default BottomChallengeBar
