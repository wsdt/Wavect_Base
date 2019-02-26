"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Yup = require("yup");
var validationYupSchema = Yup.object().shape({
    email: Yup.string()
        .required()
        .email(),
    password: Yup.string()
        .required()
});
exports.default = validationYupSchema;
//# sourceMappingURL=LoginForm.yup.js.map