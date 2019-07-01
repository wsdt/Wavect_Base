import React from "react"
import { View } from "react-native"
import { Button, Icon } from "react-native-elements"
import styles from "./MajorButton.css"
import { IMajorButtonProps } from "./MajorButton.props"

export const MajorButton: React.FunctionComponent<IMajorButtonProps> = props => {
    // TODO: Allow to provide custom style obj (merge here) e.g. flex dynamic

    let containerStyle
    switch (props.btnType) {
        case MajorBtnType.PRIMARY:
            containerStyle = styles.primaryBtnContainer
            break
        case MajorBtnType.SECONDARY:
            containerStyle = styles.secondaryBtnContainer
            break
        case MajorBtnType.HIGHLIGHTED:
            containerStyle = styles.highlightedBtnContainer
            break
    }

    const { title, onPress, icon } = props
    return (
        <View style={containerStyle}>
            <Button
                title={title}
                type="outline"
                titleStyle={styles.btnTitleStandard}
                buttonStyle={styles.btnStyleWithBorder}
                onPress={onPress}
                loading={props.isLoading}
                icon={<Icon name={icon} type="font-awesome" />}
            />
        </View>
    )
}

export enum MajorBtnType {
    PRIMARY,
    SECONDARY,
    HIGHLIGHTED,
}
