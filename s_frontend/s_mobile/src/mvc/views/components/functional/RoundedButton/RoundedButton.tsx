import { Button, Text } from "native-base"
import * as React from "react"
import { View } from "react-native"
import styles from "./RoundedButton.css"
import { IRoundedButtonProps } from "./RoundedButton.props"

export const RoundedButton: React.FunctionComponent<IRoundedButtonProps> = props => {
    return (
        <View style={styles.parentContainer}>
            <Button style={styles.button} onPress={props.press}>
                <Text style={styles.title}>{props.title}</Text>
            </Button>
        </View>
    )
}
