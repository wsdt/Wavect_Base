import React from "react"
import {TouchableOpacity} from "react-native"
import {Image} from "react-native-elements"
import {CHALLENGE_CATEGORIES} from "../../../../models/ChallengeCategory"
import styles from "./ChallengeType.css"
import {IChallengeTypeProps} from "./ChallengeType.props"

export const ChallengeType: React.FunctionComponent<IChallengeTypeProps> = props => {

    return <TouchableOpacity style={styles.touchableContainer}>
        <Image source={CHALLENGE_CATEGORIES[props.type]} containerStyle={styles.imageContainer} style={styles.image}/>
    </TouchableOpacity>
}

export default ChallengeType
