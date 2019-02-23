import * as React from "react"
import {View} from "react-native"
import * as styleBase from "../../../scss/base.scss"
import p from "../../../scss/parseScss"
import {LoginForm} from "../LoginForm"
import {OAuth} from "../OAuth"


export const Login = () => {
    return <View style={p(styleBase.page)}>

        <LoginForm />
        <OAuth />
    </View>

}