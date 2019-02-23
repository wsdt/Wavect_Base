import * as React from "react"
import {View} from "react-native"
import {ButtonGroup, Input} from "react-native-elements"
import p from "../../scss/parseScss"

import * as baseStyle from "../../scss/base.scss"
import * as formStyle from "../../scss/form.scss"

export class LoginForm extends React.Component {
    public state = {
        btnGroup: {
            selectedIndex: 0,
        },
        pwdHidden: true,
    }

    public render() {
        // Which icon to show when pwd input (not) hidden?
        const rightPwdIcon = (this.state.pwdHidden) ? "eye" : "eye-off"

        return (
            <View style={p(baseStyle.container)}>
                <Input label="Username" placeholder="Ernesto" leftIcon={{type:"feather", name:"user", size:15, color:"grey"}}
                       containerStyle={p(formStyle.listElem)} labelStyle={p(formStyle.textLabel)}  leftIconContainerStyle={p(formStyle.leftIconContainer)}/>
                <Input label="Password" placeholder="Your secret password" secureTextEntry={this.state.pwdHidden}
                       leftIcon={{type:"feather", name:"lock", size:15, color:"grey"}} rightIcon={{type:"feather", name:rightPwdIcon, size:15, color: "grey", onPress:this.togglePwdVisibility}}
                       containerStyle={p(formStyle.listElem)} labelStyle={p(formStyle.textLabel)} leftIconContainerStyle={p(formStyle.leftIconContainer)} rightIconContainerStyle={p(formStyle.rightIconContainer)}/>

                <ButtonGroup selectedIndex={this.state.btnGroup.selectedIndex} buttons={
                    ["Login", "Register", "Forgotten"]} onPress={this.onRegLoginPress}
                             containerStyle={{height: 35}} />
            </View>
        )
    }

    private togglePwdVisibility = () => {
        this.setState((prevState:any) => {
            return {...prevState,
                pwdHidden: !prevState.pwdHidden}
        })
    }

    private onRegLoginPress = (selectedIndex: number) => {
        switch (selectedIndex) {
            case 0:
                this.onLoginBtnPress()
                break
            case 1:
                this.onRegisterBtnPress()
                break
            case 2:
                this.onPwdForgottenBtnPress()
                break
            default:
                console.error("onRegLoginPress: Unknown button.")
        }

        this.setState({btnGroup: {selectedIndex}})
    }

    private onLoginBtnPress = () => {
        // TODO
    }

    private onRegisterBtnPress = () => {
        // TODO
    }

    private onPwdForgottenBtnPress = () => {
        // TODO
    }
}