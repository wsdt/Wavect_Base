import * as Yup from 'yup'

const validationScheme = Yup.object().shape({
    firstname: Yup.string().required(),
    lastname: Yup.string().required(),
    email: Yup.string().required().email(),
    emailCheck: Yup.string().required().email().oneOf([Yup.ref("email"), null], "Emails must match! "),
    pw: Yup.string().required().min(8).max(32),
    pwCheck: Yup.string().required().min(8).max(32).oneOf([Yup.ref("pw"), null], "Password must match!")

})

export default validationScheme