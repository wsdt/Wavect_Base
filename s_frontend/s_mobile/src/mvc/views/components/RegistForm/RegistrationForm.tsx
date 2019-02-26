
import React, {Component} from 'react'
import {Formik, FormikActions, FormikProps} from 'formik'
import {handleTextInput} from "react-native-formik";
import {Button, Input} from "react-native-elements";
import {View} from "react-native";
import IAcceptable from "./RegisterForm.interface";
import yup from "./Registration.yup"


const acceptableValues: IAcceptable = {firstname: "", lastname: "", email: "", emailCheck: "", pw: "", pwCheck: "" }
const FormikInput = handleTextInput(Input)

export class RegistrationForm extends Component {
    state = {
        hidden: true,
        hiddenCheck: true
    }

    render() {
        return <Formik initialValues={acceptableValues}
                       validationSchema={yup}
                       onSubmit={ (formikValue: IAcceptable, formikbag: FormikActions<IAcceptable>) => {this.isSubmittingHandler(formikValue, formikbag)} }
                       render={(formikbag: FormikProps<IAcceptable>) => this.renderForm(formikbag)} />
    }

    private renderForm = ({values, isSubmitting, handleSubmit, touched, errors}:FormikProps<IAcceptable>) => {

        return <View>
            <FormikInput label="Firstname" name="firstname" type="firstname" placeholder="Max" value={values.firstname} editable={!isSubmitting}
                         errorMessage={(touched.firstname && errors.firstname ? errors.firstname.toString() : undefined )}/>
            <FormikInput label="Lastname" name="lastname" type="lastname" placeholder="Mustermann" value={values.lastname} editable={!isSubmitting}
                         errorMessage={(touched.lastname && errors.lastname ? errors.lastname.toString() : undefined )} />
            <FormikInput label="Email" name="email" type="email"  placeholder="max.mustermann@chello.at" value={values.email} editable={!isSubmitting}
                         errorMessage={(touched.email && errors.email ? errors.email.toString() : undefined )} />
            <FormikInput label="Confirm Email" name="emailCheck" type="emailCheck" placeholder="max.mustermann@chello.at" value={values.emailCheck} editable={!isSubmitting}
                         errorMessage={(touched.emailCheck && errors.emailCheck ? errors.emailCheck.toString() : undefined )} />

            <FormikInput label="Password" name="pw" type="pw" secureTextEntry={this.state.hidden} placeholder="*****" value={values.pw} editable={!isSubmitting}
                         rightIcon={ {type: "feather", name:"eye", color:"#ccc", size:18, onPress: () => this.isHiddenHandler(false)} }
                         errorMessage={(touched.pw && errors.pw ? errors.pw.toString() : undefined )} />

            <FormikInput label="Confirm Password" name="pwCheck" secureTextEntry={this.state.hiddenCheck} type="pwCheck" placeholder="*****" value={values.pwCheck} editable={!isSubmitting}
                         rightIcon={ {type: "feather", name:"eye", color:"#ccc", size:18, onPress: () => this.isHiddenHandler(true)} }
                         errorMessage={(touched.pwCheck && errors.pwCheck ? errors.pwCheck.toString() : undefined )} />

            <Button title="Confirm" onPress={handleSubmit as any} loading={isSubmitting} disabled={isSubmitting}/>

        </View>
    }

    private isHiddenHandler = (isCheck: boolean) => {
        if(isCheck){
            this.setState( (prevState: any) => {
                return { ...prevState, hiddenCheck: !prevState.hiddenCheck}     //vgl udemy Objekt-copy
            })
        }else{
            this.setState( (prevState: any) => {
                return { ...prevState, hidden: !prevState.hidden}
            })
        }
    }

    private isSubmittingHandler = (values: IAcceptable, formikbag: FormikActions<IAcceptable>) => {
        formikbag.setSubmitting(true)

        setTimeout(() => {
            formikbag.setSubmitting(false)
        }, 2000)
    }
}
