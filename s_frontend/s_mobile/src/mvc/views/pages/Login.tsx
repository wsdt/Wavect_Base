import * as React from "react"
import {View} from "react-native"
import {Header} from "react-native-elements"
import * as styleBase from "../../../scss/base.scss"
import p from "../../../scss/parseScss"
import {BeKindIcon} from "../BeKindIcon/BeKindIcon"
import {LoginForm} from "../LoginForm"
import {OAuth} from "../OAuth"


export const Login = () => {
    return <View style={p(styleBase.page)}>
        <Header leftComponent={<BeKindIcon width={30} height={30} />} centerComponent={{text: "Authentication", style: {color: "#fff"}}} containerStyle={p(styleBase.header)}/>
        <View style={p(styleBase.center)}>
            <LoginForm/>
            <OAuth/>
        </View>
    </View>
}