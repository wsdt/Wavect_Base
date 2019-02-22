import {Formik} from "formik"
import * as React from "react"
import {TextInput, View, StyleSheet, ViewStyle} from "react-native"
import {Button, Icon, Input, Text, Divider} from "react-native-elements"

import "../../scss/base.scss"

export default class Login extends React.Component {
    state = {isPressed: false};

    public render() {

        return (
            <View style={styles.container}>
                <Text style={styles.title}> Log In</Text>

                <Input  label='Username' placeholder='Username'/>
                <Input  label='Password' placeholder='Password'/>

                <Button buttonStyle={styles.button} title='Login' type='solid' onPress={this.stateHandler} loading={this.state.isPressed}/>

                <Button buttonStyle={styles.notRegistered} title='Not Registered yet?' type='clear' />

            </View>
        )
    }

    private stateHandler = () => {
        this.setState({isPressed: true});
            setTimeout( () => {
                this.setState({isPressed: false})

            }, 2000)
    };
}

const styles = StyleSheet.create({

    title: {
        fontSize: 48,
        color: 'gray',
    },

    container: {
        justifyContent: 'center',
        alignItems:'center',
        paddingTop: 50,
        flex: 1
    },

    button: {
        marginTop: 25,
        width: 75,
    },

    notRegistered: {
        marginTop: 25,
        width: 200,
    }
});