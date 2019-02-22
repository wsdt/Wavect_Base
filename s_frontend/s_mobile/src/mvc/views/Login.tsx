import * as React from "react"
import {View, StyleSheet, RegisteredStyle} from "react-native"
import {Button, Input, Text} from "react-native-elements"

import * as styleBase from "../../scss/base.scss"

export default class Login extends React.Component {
    public state = {form: {isLoading: false}}

    public render() {
        console.log(JSON.stringify(styleBase))

        return <View style={styleBase.container}>
            <Text h1> Log In</Text>
            <Input label="Username" placeholder="Username"/>
            <Input label="Password" placeholder="Password" secureTextEntry={true}/>

            <Button buttonStyle={styleBase.button} title="Login" type="solid" onPress={this.submitForm}
                    loading={this.state.form.isLoading}/>

            <Button buttonStyle={styleBase.button} title="Register now" type="clear"/>

        </View>
    }

    private submitForm = () => {
        this.setState({form: {isLoading: true}})
        setTimeout(() => {
            this.setState({form: {isLoading: false}})
        }, 2000)
    }
}