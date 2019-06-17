import React from "react"
import { View } from "react-native"
import { Button } from "react-native-elements"
import styles from "./MajorButton.css"
import { IMajorButtonProps } from "./MajorButton.props"

export const MajorButton: React.FunctionComponent<IMajorButtonProps> = props => {
    // TODO: Allow to provide custom style obj (merge here) e.g. flex dynamic

    const containerStyle = props.btnType === MajorBtnType.PRIMARY ? styles.primaryBtnContainer : styles.secondaryBtnContainer

    const { title, onPress } = props
    return (
        <View style={containerStyle}>
            <Button title={title} type="outline" titleStyle={styles.btnTitleStandard} buttonStyle={styles.btnStyleWithBorder} onPress={onPress}/>
        </View>
    )
}

export enum MajorBtnType {
    PRIMARY,
    SECONDARY,
}
