import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import { Button, Text } from "react-native-elements"
import { IChallengeBottomBarProps } from "./BottomChallengeBar.props"

class BottomChallengeBar extends Component<IChallengeBottomBarProps, any> {
    render() {
        const { headline, subline } = this.props

        return (
            <View style={styles.toplevel}>
                <Text style={styles.headline}>{headline}</Text>
                <Text style={styles.subline}>{subline}</Text>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Ablehnen"
                        type="outline"
                        titleStyle={{
                            fontSize: 30,
                            padding: 10,
                            color: "#000",
                        }}
                        containerStyle={styles.button}
                        buttonStyle={styles.buttonStyle}
                    />
                    <Button
                        title="Annehmen"
                        type="outline"
                        titleStyle={{
                            fontSize: 30,
                            padding: 10,
                            color: "#000",
                        }}
                        containerStyle={styles.button}
                        buttonStyle={styles.buttonStyle}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    toplevel: {
        backgroundColor: "rgba(52, 52, 52, 0.2)",
        width: "100%",
        height: 200,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 5,
    },
    headline: {
        fontSize: 32,
        fontWeight: "bold",
        margin: 10,
    },
    subline: {
        fontSize: 20,
        margin: 5,
    },
    button: {
        backgroundColor: "#ccc",
    },
    buttonStyle: {
        color: "#000",
        borderColor: "#000",
    },
})

export default BottomChallengeBar
