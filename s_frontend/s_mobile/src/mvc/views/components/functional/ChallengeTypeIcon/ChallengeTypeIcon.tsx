import React from "react"
import { TouchableOpacity } from "react-native"
import { Image } from "react-native-elements"
import { CHALLENGE_CATEGORIES } from "../../../../models/ChallengeCategory"
import styles from "./ChallengeTypeIcon.css"
import { IChallengeTypeIconProps } from "./ChallengeTypeIcon.props"

export const ChallengeTypeIcon: React.FunctionComponent<IChallengeTypeIconProps> = props => {
    return (
        <TouchableOpacity style={styles.touchableContainer}>
            <Image source={CHALLENGE_CATEGORIES[props.type]} containerStyle={styles.imageContainer} style={styles.image} />
        </TouchableOpacity>
    )
}
