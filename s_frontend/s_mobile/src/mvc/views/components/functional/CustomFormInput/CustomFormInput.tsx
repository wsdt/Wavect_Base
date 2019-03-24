import * as React from "react"
import { Input } from "react-native-elements"
import { handleTextInput } from "react-native-formik"
import * as formStyle from "../../../../../scss/form.scss"
import p from "../../../../../scss/parseScss"

/** Custom Form Input */
export const CustomFormInput = (props: any): React.ReactNode => {
    const TmpFormInput = handleTextInput(Input)
    return <TmpFormInput {...props} containerStyle={p(formStyle.input)} />
}
