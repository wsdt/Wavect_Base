import * as React from "react"
import {TouchableOpacity} from "react-native"
import {SocialIcon} from "react-native-elements"
import * as styleBase from "../../../../../scss/base.scss"
import p from "../../../../../scss/parseScss"
import {ISocialBtnProps} from "./ISocialBtn.props"

export const SocialBtn = (props:ISocialBtnProps) => {
    return <TouchableOpacity
        onPress={() => props.authCallback}
    >
        <SocialIcon
            type={props.socialType}
            button
            light
            style={p(styleBase.gridElem)}
        />
    </TouchableOpacity>
}