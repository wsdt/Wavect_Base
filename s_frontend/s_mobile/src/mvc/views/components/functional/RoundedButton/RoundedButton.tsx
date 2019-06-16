import * as React from "react"
import { View } from "react-native"
import { Button, withBadge } from "react-native-elements"
import styles from "./RoundedButton.css"
import { IRoundedButtonProps } from "./RoundedButton.props"

export const RoundedButton:React.FunctionComponent<IRoundedButtonProps> = (props) => {
    const BadgedBtn = withBadge()(Button)
    return (
        <View style={styles.parentContainer}>
            <BadgedBtn
                title={props.title}
                titleStyle={styles.title}
                buttonStyle={styles.button}
                onPress={props.press}
            />
        </View>
    )
}
