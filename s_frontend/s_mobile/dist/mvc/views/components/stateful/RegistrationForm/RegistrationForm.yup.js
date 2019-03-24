"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Yup = require("yup");
var validationScheme = Yup.object().shape({
    firstname: Yup.string().required(),
    lastname: Yup.string().required(),
    email: Yup.string()
        .required()
        .email(),
    emailCheck: Yup.string()
        .required()
        .email()
        .oneOf([Yup.ref("email"), null], "Emails must match! "),
    pw: Yup.string()
        .required()
        .min(8)
        .max(32),
    pwCheck: Yup.string()
        .required()
        .min(8)
        .max(32)
        .oneOf([Yup.ref("pw"), null], "Password must match!"),
});
exports.default = validationScheme;
//# sourceMappingURL=RegistrationForm.yup.js.map