import {Formik, FormikActions, FormikProps, FormikValues} from "formik"
import * as React from "react"
import {View} from "react-native"
import {Button, Input} from "react-native-elements"
import {handleTextInput} from "react-native-formik"
import p from "../../../../scss/parseScss"

import * as baseStyle from "../../../../scss/base.scss"
import * as formStyle from "../../../../scss/form.scss"
import {notImplementedSync} from "../../../controllers/WarningsController"
import validationYupSchema from "./LoginForm.yup"

const FormikInput = handleTextInput(Input)

export class LoginForm extends React.Component {
    public state = {
        pwdHidden: true,
    }

    public render() {
        return <Formik initialValues={{email: "", password: ""}}
                       onSubmit={(values:FormikValues, formikBag:FormikActions<FormikValues>) => this.onLoginBtnPress(values, formikBag)}
                       validationSchema={validationYupSchema}
                       render={(formikBag: FormikProps<FormikValues>) => this.renderForm(formikBag)} />
    }

    /** Renders the whole login form (incl. form validation, state management, logic, etc.) */
    private renderForm = ({values, handleSubmit, setFieldValue, touched, errors, setFieldTouched, isSubmitting}: FormikProps<FormikValues>) => {
        // Which icon to show when pwd input (not) hidden?
        const rightPwdIcon = (this.state.pwdHidden) ? "eye" : "eye-off"

        return <View style={p(baseStyle.container)}>
            <FormikInput label="E-Mail" name="email" type="email" placeholder="ernesto@gmail.com" editable={!isSubmitting}
                   value={values.email} leftIcon={{type: "feather", name: "user", size: 15, color: "grey"}}
                   containerStyle={p(formStyle.listElem)} labelStyle={p(formStyle.textLabel)}
                   leftIconContainerStyle={p(formStyle.leftIconContainer)} keyboardType="email-address"/>

            <FormikInput label="Password" name="password" type="password" placeholder="Your secret password" secureTextEntry={this.state.pwdHidden}
                   editable={!isSubmitting} autoCapitalize="none" autoCorrect={false} value={values.password}
                   leftIcon={{type: "feather", name: "lock", size: 15, color: "grey"}}
                   containerStyle={p(formStyle.listElem)} labelStyle={p(formStyle.textLabel)}
                   leftIconContainerStyle={p(formStyle.leftIconContainer)}
                   rightIconContainerStyle={p(formStyle.rightIconContainer)} rightIcon={{
                color: "grey",
                name: rightPwdIcon,
                onPress: this.togglePwdVisibility,
                size: 18,
                type: "feather",
            }}/>

            <View style={p(baseStyle.elemRow)}>
                <Button title="Login" onPress={handleSubmit as any} disabled={isSubmitting}
                        loading={isSubmitting} type="solid" containerStyle={p(formStyle.btn)}/>
                <Button title="Register" onPress={this.onRegisterBtnPress} disabled={isSubmitting}
                        type="outline" containerStyle={p(formStyle.btn)}/></View>
            <Button title="Forgot password" onPress={this.onPwdForgottenBtnPress} disabled={isSubmitting}
                    type="clear" containerStyle={p(formStyle.btn)}/>
        </View>
    }

    /**
     * Toggles the visibility of the password field. On first click pwd will be readable, on every 2nd click
     * the pwd will be hidden again (= default).
     */
    private togglePwdVisibility = () => {
        this.setState((prevState: any) => {
            return {
                ...prevState,
                pwdHidden: !prevState.pwdHidden
            }
        })
    }

    private onLoginBtnPress = (values:FormikValues, formikBag: FormikActions<FormikValues>) => {
        formikBag.setSubmitting(true)

        // TODO implement real login
        notImplementedSync()

        setTimeout(() => {
            formikBag.setSubmitting(false)
            // when successful navigate to next page
        }, 2000)
    }

    private onRegisterBtnPress = () => {
        // TODO
        notImplementedSync()
    }

    private onPwdForgottenBtnPress = () => {
        // TODO
        notImplementedSync()
    }
}