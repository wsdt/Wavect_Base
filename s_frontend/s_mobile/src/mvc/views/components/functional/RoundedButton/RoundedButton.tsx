import { Text, Button, withBadge } from "react-native-elements"
import * as React from "react"
import { View } from "react-native"
import styles from "./RoundedButton.css"
import { IRoundedButtonProps } from "./RoundedButton.props"

export const RoundedButton: React.FunctionComponent<IRoundedButtonProps> = props => {
    const BadgedBtn = withBadge()(Button)
    return (
        <View style={styles.parentContainer}>
            <BadgedBtn buttonStyle={styles.button} onPress={props.press} title={props.title} titleStyle={styles.title} />
        </View>
    )
}
