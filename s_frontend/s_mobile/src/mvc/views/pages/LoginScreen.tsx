import * as React from "react"
import {View} from "react-native"
import * as styleBase from "../../../scss/base.scss"
import p from "../../../scss/parseScss"
import {LoginForm} from "../components/LoginForm/LoginForm"
import {OAuth} from "../components/OAuth/OAuth"

// <Header leftComponent={<BeKindIcon width={30} height={30} />} centerComponent={{text: "Authentication", style: {color: "#fff"}}} containerStyle={p(styleBase.header)}/>

export const LoginScreen = () => {
    return <View style={p(styleBase.page)}>
        <View style={p(styleBase.center)}>
            <LoginForm/>
            <OAuth/>
        </View>
    </View>
}