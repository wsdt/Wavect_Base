import { Formik, FormikActions, FormikProps } from "formik"
import React, { Component } from "react"
import { View } from "react-native"
import { Button } from "react-native-elements"
import { notImplementedSync } from "../../../../controllers/WarningsController"
import { CustomFormInput } from "../../functional/CustomFormInput/CustomFormInput"
import IAcceptable from "./RegistrationForm.interfaces"
import { IRegistrationFormState } from "./IRegistrationForm.state"
import yup from "./RegistrationForm.yup"

const acceptableValues: IAcceptable = {
    email: "",
    emailCheck: "",
    firstname: "",
    lastname: "",
    pw: "",
    pwCheck: "",
}

export class RegistrationForm extends Component<any, IRegistrationFormState> {
    public state = {
        hidden: true,
        hiddenCheck: true,
    }

    public render(): React.ReactNode {
        return (
            <Formik
                initialValues={acceptableValues}
                validationSchema={yup}
                onSubmit={(
                    formikValue: IAcceptable,
                    formikbag: FormikActions<IAcceptable>
                ) => {
                    this.isSubmittingHandler(formikValue, formikbag)
                }}
                render={(formikbag: FormikProps<IAcceptable>) =>
                    this.renderForm(formikbag)
                }
            />
        )
    }

    private renderForm = ({
        values,
        isSubmitting,
        handleSubmit,
        touched,
        errors,
    }: FormikProps<IAcceptable>) => {
        return (
            <View>
                <CustomFormInput
                    label="Firstname"
                    name="firstname"
                    type="firstname"
                    placeholder="Max"
                    value={values.firstname}
                    editable={!isSubmitting}
                    errorMessage={
                        touched.firstname && errors.firstname
                            ? errors.firstname.toString()
                            : undefined
                    }
                />
                <CustomFormInput
                    label="Lastname"
                    name="lastname"
                    type="lastname"
                    placeholder="Mustermann"
                    value={values.lastname}
                    editable={!isSubmitting}
                    errorMessage={
                        touched.lastname && errors.lastname
                            ? errors.lastname.toString()
                            : undefined
                    }
                />
                <CustomFormInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="max.mustermann@chello.at"
                    value={values.email}
                    editable={!isSubmitting}
                    errorMessage={
                        touched.email && errors.email
                            ? errors.email.toString()
                            : undefined
                    }
                />
                <CustomFormInput
                    label="Confirm Email"
                    name="emailCheck"
                    type="emailCheck"
                    placeholder="max.mustermann@chello.at"
                    value={values.emailCheck}
                    editable={!isSubmitting}
                    errorMessage={
                        touched.emailCheck && errors.emailCheck
                            ? errors.emailCheck.toString()
                            : undefined
                    }
                />

                <CustomFormInput
                    label="Password"
                    name="pw"
                    type="pw"
                    secureTextEntry={this.state.hidden}
                    placeholder="*****"
                    value={values.pw}
                    editable={!isSubmitting}
                    rightIcon={{
                        color: "#ccc",
                        name: "eye",
                        onPress: () => this.isHiddenHandler(false),
                        size: 18,
                        type: "feather",
                    }}
                    errorMessage={
                        touched.pw && errors.pw
                            ? errors.pw.toString()
                            : undefined
                    }
                />

                <CustomFormInput
                    label="Confirm Password"
                    name="pwCheck"
                    secureTextEntry={this.state.hiddenCheck}
                    type="pwCheck"
                    placeholder="*****"
                    value={values.pwCheck}
                    editable={!isSubmitting}
                    rightIcon={{
                        color: "#ccc",
                        name: "eye",
                        onPress: () => this.isHiddenHandler(true),
                        size: 18,
                        type: "feather",
                    }}
                    errorMessage={
                        touched.pwCheck && errors.pwCheck
                            ? errors.pwCheck.toString()
                            : undefined
                    }
                />

                <Button
                    title="Confirm"
                    onPress={handleSubmit as any}
                    loading={isSubmitting}
                    disabled={isSubmitting}
                />
            </View>
        )
    }

    private isHiddenHandler = (isCheck: boolean) => {
        if (isCheck) {
            this.setState((prevState: any) => {
                return { ...prevState, hiddenCheck: !prevState.hiddenCheck } // vgl udemy Objekt-copy
            })
        } else {
            this.setState((prevState: any) => {
                return { ...prevState, hidden: !prevState.hidden }
            })
        }
    }

    private isSubmittingHandler = (
        values: IAcceptable,
        formikbag: FormikActions<IAcceptable>
    ) => {
        formikbag.setSubmitting(true)

        // TODO: Replace with real api call
        notImplementedSync()
        setTimeout(() => {
            formikbag.setSubmitting(false)
        }, 2000)
    }
}