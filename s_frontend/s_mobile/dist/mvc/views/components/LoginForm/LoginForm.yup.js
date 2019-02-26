"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Yup = require("yup");
var LocalizationController_1 = require("../../../controllers/LocalizationController");
var validationYupSchema = Yup.object().shape({
    email: Yup.string()
        .required(LocalizationController_1.default.errEmailRequired)
        .email(LocalizationController_1.default.errEmailInvalid),
    password: Yup.string()
        .required(LocalizationController_1.default.errPwdRequired)
});
exports.default = validationYupSchema;
//# sourceMappingURL=LoginForm.yup.js.map