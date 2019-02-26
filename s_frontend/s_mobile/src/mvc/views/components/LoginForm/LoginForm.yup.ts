import * as Yup from "yup"
import str from "../../../controllers/LocalizationController"

/** YUP is a validation scheme for forms/formik. */
const validationYupSchema = Yup.object().shape({
    email: Yup.string()
        .required(str.errors.emailRequired)
        .email(str.errors.emailInvalid), // you can also provide here everywhere a custom msg
    password: Yup.string()
        .required(str.errors.pwdRequired)
})

export default validationYupSchema