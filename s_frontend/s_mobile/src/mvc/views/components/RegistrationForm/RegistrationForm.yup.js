"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
var Yup = require("yup")
var validationScheme = Yup.object().shape({
  email: Yup.string()
    .required()
    .email(),
  emailCheck: Yup.string()
    .required()
    .email()
    .oneOf([Yup.ref("email"), null], "Emails must match! "),
  firstname: Yup.string().required(),
  lastname: Yup.string().required(),
  pw: Yup.string()
    .required()
    .min(8)
    .max(32),
  pwCheck: Yup.string()
    .required()
    .min(8)
    .max(32)
    .oneOf([Yup.ref("pw"), null], "Password must match!")
})
exports.default = validationScheme
