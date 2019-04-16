import { Formik, FormikActions, FormikProps } from "formik"
import * as React from "react"
import { View } from "react-native"
import { Button } from "react-native-elements"
import p from "../../../../../styling/parseScss"
import { CustomFormInput } from "../../functional/CustomFormInput/CustomFormInput"
import * as styles from "./LoginForm.scss"

import { notImplementedSync } from "../../../../controllers/WarningsController"
import { ILoginFormState } from "./ILoginForm.state"
import { ILoginFormValues } from "./LoginForm.interfaces"
import validationYupSchema from "./LoginForm.yup"

const defaultFormValues: ILoginFormValues = { email: "", password: "" }

// TODO: https://medium.com/@rajaraodv/securing-react-redux-apps-with-jwt-tokens-fcfe81356ea0
// After login return JWT and then use it for session auth
export class LoginForm extends React.Component<any, ILoginFormState> {
    public state:ILoginFormState = {
        pwdHidden: true,
    }

    public render(): React.ReactNode {
        return (
            <Formik
                initialValues={defaultFormValues}
                onSubmit={(
                    values: ILoginFormValues,
                    formikBag: FormikActions<ILoginFormValues>
                ) => this.onLoginBtnPress(values, formikBag)}
                validationSchema={validationYupSchema}
                render={(formikBag: FormikProps<ILoginFormValues>) =>
                    this.renderForm(formikBag)
                }
            />
        )
    }

    /** Renders the whole login form (incl. form validation, state management, logic, etc.) */
    private renderForm = ({
        values,
        handleSubmit,
        touched,
        errors,
        isSubmitting,
    }: FormikProps<ILoginFormValues>) => {
        // Which icon to show when pwd input (not) hidden?
        const rightPwdIcon = this.state.pwdHidden ? "eye" : "eye-off"

        return (
            <View style={p(styles.container)}>
                <CustomFormInput
                    label={"E-Mail"}
                    name="email"
                    type="email"
                    placeholder={"your-mail@gmail.com"}
                    editable={!isSubmitting}
                    value={values.email}
                    leftIcon={{
                        color: "grey",
                        name: "user",
                        size: 15,
                        type: "feather",
                    }}
                    containerStyle={p(styles.listElem)}
                    labelStyle={p(styles.textLabel)}
                    leftIconContainerStyle={p(styles.leftIconContainer)}
                    keyboardType="email-address"
                    errorMessage={
                        touched.email && errors.email
                            ? errors.email.toString()
                            : null
                    }
                />

                <CustomFormInput
                    label={"Password"}
                    name="password"
                    type="password"
                    placeholder={"Not 1234"}
                    secureTextEntry={this.state.pwdHidden}
                    editable={!isSubmitting}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={values.password}
                    leftIcon={{
                        color: "grey",
                        name: "lock",
                        size: 15,
                        type: "feather",
                    }}
                    containerStyle={p(styles.listElem)}
                    labelStyle={p(styles.textLabel)}
                    leftIconContainerStyle={p(styles.leftIconContainer)}
                    errorMessage={
                        touched.password && errors.password
                            ? errors.password.toString()
                            : null
                    }
                    rightIconContainerStyle={p(styles.rightIconContainer)}
                    rightIcon={{
                        color: "grey",
                        name: rightPwdIcon,
                        onPress: this.togglePwdVisibility,
                        size: 18,
                        type: "feather",
                    }}
                />

                <View style={p(styles.elemRow)}>
                    <Button
                        title={"Login"}
                        onPress={handleSubmit as any}
                        disabled={isSubmitting}
                        loading={isSubmitting}
                        type="solid"
                        containerStyle={p(styles.btn)}
                    />
                    <Button
                        title={"Register"}
                        onPress={this.onRegisterBtnPress}
                        disabled={isSubmitting}
                        type="outline"
                        containerStyle={p(styles.btn)}
                    />
                </View>
                <Button
                    title={"Forgot password"}
                    onPress={this.onPwdForgottenBtnPress}
                    disabled={isSubmitting}
                    type="clear"
                    containerStyle={p(styles.btn)}
                />
            </View>
        )
    }

    /**
     * Toggles the visibility of the password field. On first click pwd will be readable, on every 2nd click
     * the pwd will be hidden again (= default).
     */
    private togglePwdVisibility = () => {
        this.setState((prevState: any) => {
            return {
                ...prevState,
                pwdHidden: !prevState.pwdHidden,
            }
        })
    }

    private onLoginBtnPress = (
        values: ILoginFormValues,
        formikBag: FormikActions<ILoginFormValues>
    ) => {
        formikBag.setSubmitting(true)

        // TODO implement real login
        notImplementedSync()

        setTimeout(() => {
            formikBag.setSubmitting(false)
            // when successful navigate to next page
            // this.props.navigation.navigate("ProfileScreen")
        }, 2000)
    }

    private onRegisterBtnPress = () => {
        this.props.navigation.navigate("RegistrationScreen")
    }

    private onPwdForgottenBtnPress = () => {
        // TODO
        notImplementedSync()
    }
}
