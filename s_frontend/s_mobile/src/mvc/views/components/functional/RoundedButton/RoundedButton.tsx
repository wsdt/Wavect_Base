import * as React from "react"
import {Button, withBadge} from "react-native-elements"
import p from "../../../../controllers/parseScss"
import {IRoundedButtonProps} from "./RoundedButton.props"
import * as styles from "./RoundedButton.scss"
import {View} from "react-native";

export const RoundedButton = (props: IRoundedButtonProps) => {
    const BadgedBtn = withBadge()(Button)
    return <View style={p(styles.parentContainer)}>
        <BadgedBtn title={props.title} titleStyle={p(styles.title)} buttonStyle={p(styles.button)}/>
    </View>
}