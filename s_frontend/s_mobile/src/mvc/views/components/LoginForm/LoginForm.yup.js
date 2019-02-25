"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Yup = require("yup");
/** YUP is a validation scheme for forms/formik. */
var validationYupSchema = Yup.object().shape({
    email: Yup.string()
        .required()
        .email(),
    password: Yup.string()
        .required()
});
exports.default = validationYupSchema;
