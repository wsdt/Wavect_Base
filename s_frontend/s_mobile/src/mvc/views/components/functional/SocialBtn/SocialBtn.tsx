import * as React from "react"
import { TouchableOpacity } from "react-native"
import { SocialIcon } from "react-native-elements"
import p from "../../../../../styling/parseScss"
import { ISocialBtnProps } from "./ISocialBtn.props"
import * as styles from "./SocialBtn.scss"

export const SocialBtn = (props: ISocialBtnProps): React.ReactNode => {
    return (
        <TouchableOpacity onPress={() => props.authCallback}>
            <SocialIcon
                type={props.socialType}
                button
                light
                style={p(styles.gridElem)}
            />
        </TouchableOpacity>
    )
}
