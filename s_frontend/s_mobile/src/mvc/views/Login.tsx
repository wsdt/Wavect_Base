import {Formik} from "formik"
import * as React from "react"
import {TextInput, View} from "react-native"
import {Button, Icon, Input} from "react-native-elements"

import "../../scss/base.scss"
import "../../scss/login.scss"

export default class Login extends React.Component {
    public state = {form:{isLoading:false}}


    public render() {
        return (
            <Formik initialValues={{email: "", password: ""}}
                    onSubmit={() => console.log("Login request sent.")}>
                {({values, handleChange}) => (
                    <React.Fragment>
                        <Input placeholder="E-Mail"
                               rightIcon={{type: "feather", name: "mail"}}
                               value={values.email}
                               shake={true}
                               onChangeText={handleChange("email")}/>
                        <Input
                            value={values.password}
                            rightIcon={{type: "feather", name: "lock"}}
                            onChangeText={handleChange("password")}
                            placeholder="Password"
                            shake={true}
                            secureTextEntry={true}/>

                        <Button icon={<Icon
                            name="explore"
                            size={15}
                            color="white"
                        />}
                                title="Log In"
                                iconRight
                                onPress={() => this.handleSubmit(values)}
                                loading={this.state.form.isLoading}/>
                    </React.Fragment>
                )}
            </Formik>
        )
    }

    private handleSubmit = (values) => {
        console.log("LOGGING IN.")
        // TODO: send  values to server

        this.setState({form:{isLoading: true}})
        setTimeout(() => {
            this.setState({form:{isLoading: false}})
        }, 2000)
    }
}


