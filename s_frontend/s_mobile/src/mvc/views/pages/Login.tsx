import * as React from "react"
import {View} from "react-native"
import {Header} from "react-native-elements"
import * as styleBase from "../../../scss/base.scss"
import p from "../../../scss/parseScss"
import {BeKindIcon} from "../components/BeKindIcon/BeKindIcon"
import {LoginForm} from "../components/LoginForm/LoginForm"
import {OAuth} from "../components/OAuth/OAuth"


export const Login = () => {
    return <View style={p(styleBase.page)}>
        <Header leftComponent={<BeKindIcon width={30} height={30} />} centerComponent={{text: "Authentication", style: {color: "#fff"}}} containerStyle={p(styleBase.header)}/>
        <View style={p(styleBase.center)}>
            <LoginForm/>
            <OAuth/>
        </View>
    </View>
}