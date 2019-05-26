import React, { Component } from "react"
import { View } from "react-native"
import { Button, Text } from "react-native-elements"
import { IChallengeBottomBarProps } from "./BottomChallengeBar.props"
import * as styles from "./BottomChallengeBar.scss"
import p from "../../../../controllers/parseScss";

class BottomChallengeBar extends Component<IChallengeBottomBarProps, any> {
    render() {
        const { headline, subline } = this.props

        return (
            <View style={p(styles.topLevel)}>
                <Text style={p(styles.headline)}>{headline}</Text>
                <Text style={p(styles.subline)}>{subline}</Text>
                <View style={p(styles.container)}>
                    <Button
                        title="Ablehnen"
                        type="outline"
                        titleStyle={p(styles.btnTitle)}
                        containerStyle={p(styles.btnContainer)}
                        buttonStyle={p(styles.btnStyle)}
                    />
                    <Button
                        title="Annehmen"
                        type="outline"
                        titleStyle={p(styles.btnTitle)}
                        containerStyle={p(styles.btnContainer)}
                        buttonStyle={p(styles.btnStyle)}
                    />
                </View>
            </View>
        )
    }
}


export default BottomChallengeBar
