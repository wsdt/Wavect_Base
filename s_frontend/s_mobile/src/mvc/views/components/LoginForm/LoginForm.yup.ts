import * as Yup from "yup"
import str from "../../../controllers/LocalizationController"

/** YUP is a validation scheme for forms/formik. */
const validationYupSchema = Yup.object().shape({
    email: Yup.string()
        .required(str.errEmailRequired)
        .email(str.errEmailInvalid), // you can also provide here everywhere a custom msg
    password: Yup.string()
        .required(str.errPwdRequired)
})

export default validationYupSchema