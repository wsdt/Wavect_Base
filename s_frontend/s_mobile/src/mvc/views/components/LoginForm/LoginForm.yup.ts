import * as Yup from "yup"

/** YUP is a validation scheme for forms/formik. */
const validationYupSchema = Yup.object().shape({
    email: Yup.string()
        .required()
        .email(), // you can also provide here everywhere a custom msg
    password: Yup.string()
        .required()
})

export default validationYupSchema