import * as React from "react"
import { Input } from "react-native-elements"
import { handleTextInput } from "react-native-formik"
import p from "../../../../controllers/parseScss"
import * as styles from "./CustomFormInput.scss"

/** Custom Form Input */
export const CustomFormInput = (props: any): JSX.Element => {
    const TmpFormInput = handleTextInput(Input)
    return <TmpFormInput {...props} containerStyle={p(styles.input)} />
}
