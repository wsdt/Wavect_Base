"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Yup = require("yup");
var LocalizationController_1 = require("../../../controllers/LocalizationController");
var validationYupSchema = Yup.object().shape({
    email: Yup.string()
        .required(LocalizationController_1.default.errors.emailRequired)
        .email(LocalizationController_1.default.errors.emailInvalid),
    password: Yup.string()
        .required(LocalizationController_1.default.errors.pwdRequired)
});
exports.default = validationYupSchema;
//# sourceMappingURL=LoginForm.yup.js.map