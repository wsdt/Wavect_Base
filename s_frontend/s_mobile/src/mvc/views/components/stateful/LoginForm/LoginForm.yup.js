"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Yup = require("yup");
/** YUP is a validation scheme for forms/formik. */
var validationYupSchema = Yup.object().shape({
    email: Yup.string()
        .required("Mail required")
        .email("Mail not valid"),
    password: Yup.string().required("Password required"),
});
exports.default = validationYupSchema;
