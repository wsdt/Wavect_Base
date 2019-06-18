import * as React from "react"
import { Linking, View } from "react-native"
import { Text } from "react-native-elements"
import { RoundedButton } from "../../functional/RoundedButton/RoundedButton"
import { IHeaderProps } from "./Header.props"
import styles from "./Header.css"

export const Header: React.FunctionComponent<IHeaderProps> = props => {
    return (
        <View style={styles.container}>
            <Text h4 style={styles.titleContainer}>
                {props.title}
            </Text>
            <RoundedButton containerStyle={styles.btnContainer} title={props.btnTitle} press={() => Linking.openURL(props.btnLink)} />
        </View>
    )
}
