"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var formik_1 = require("formik");
var React = require("react");
var react_native_1 = require("react-native");
var react_native_elements_1 = require("react-native-elements");
var react_native_formik_1 = require("react-native-formik");
var parseScss_1 = require("../../../../scss/parseScss");
var baseStyle = require("../../../../scss/base.scss");
var formStyle = require("../../../../scss/form.scss");
var WarningsController_1 = require("../../../controllers/WarningsController");
var LoginForm_yup_1 = require("./LoginForm.yup");
var FormikInput = react_native_formik_1.handleTextInput(react_native_elements_1.Input);
var defaultFormValues = { email: "", password: "" };
var LoginForm = (function (_super) {
    __extends(LoginForm, _super);
    function LoginForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            pwdHidden: true,
        };
        _this.renderForm = function (_a) {
            var values = _a.values, handleSubmit = _a.handleSubmit, touched = _a.touched, errors = _a.errors, isSubmitting = _a.isSubmitting;
            var rightPwdIcon = (_this.state.pwdHidden) ? "eye" : "eye-off";
            return <react_native_1.View style={parseScss_1.default(baseStyle.container)}>
            <FormikInput label="E-Mail" name="email" type="email" placeholder="ernesto@gmail.com" editable={!isSubmitting} value={values.email} leftIcon={{ type: "feather", name: "user", size: 15, color: "grey" }} containerStyle={parseScss_1.default(formStyle.listElem)} labelStyle={parseScss_1.default(formStyle.textLabel)} leftIconContainerStyle={parseScss_1.default(formStyle.leftIconContainer)} keyboardType="email-address" errorMessage={(touched.email && errors.email) ? errors.email.toString() : undefined}/>

            <FormikInput label="Password" name="password" type="password" placeholder="Your secret password" secureTextEntry={_this.state.pwdHidden} editable={!isSubmitting} autoCapitalize="none" autoCorrect={false} value={values.password} leftIcon={{ type: "feather", name: "lock", size: 15, color: "grey" }} containerStyle={parseScss_1.default(formStyle.listElem)} labelStyle={parseScss_1.default(formStyle.textLabel)} leftIconContainerStyle={parseScss_1.default(formStyle.leftIconContainer)} errorMessage={(touched.password && errors.password) ? errors.password.toString() : undefined} rightIconContainerStyle={parseScss_1.default(formStyle.rightIconContainer)} rightIcon={{
                color: "grey",
                name: rightPwdIcon,
                onPress: _this.togglePwdVisibility,
                size: 18,
                type: "feather",
            }}/>

            <react_native_1.View style={parseScss_1.default(baseStyle.elemRow)}>
                <react_native_elements_1.Button title="Login" onPress={handleSubmit} disabled={isSubmitting} loading={isSubmitting} type="solid" containerStyle={parseScss_1.default(formStyle.btn)}/>
                <react_native_elements_1.Button title="Register" onPress={_this.onRegisterBtnPress} disabled={isSubmitting} type="outline" containerStyle={parseScss_1.default(formStyle.btn)}/></react_native_1.View>
            <react_native_elements_1.Button title="Forgot password" onPress={_this.onPwdForgottenBtnPress} disabled={isSubmitting} type="clear" containerStyle={parseScss_1.default(formStyle.btn)}/>
        </react_native_1.View>;
        };
        _this.togglePwdVisibility = function () {
            _this.setState(function (prevState) {
                return __assign({}, prevState, { pwdHidden: !prevState.pwdHidden });
            });
        };
        _this.onLoginBtnPress = function (values, formikBag) {
            formikBag.setSubmitting(true);
            WarningsController_1.notImplementedSync();
            setTimeout(function () {
                formikBag.setSubmitting(false);
            }, 2000);
        };
        _this.onRegisterBtnPress = function () {
            WarningsController_1.notImplementedSync();
        };
        _this.onPwdForgottenBtnPress = function () {
            WarningsController_1.notImplementedSync();
        };
        return _this;
    }
    LoginForm.prototype.render = function () {
        var _this = this;
        return <formik_1.Formik initialValues={defaultFormValues} onSubmit={function (values, formikBag) { return _this.onLoginBtnPress(values, formikBag); }} validationSchema={LoginForm_yup_1.default} render={function (formikBag) { return _this.renderForm(formikBag); }}/>;
    };
    return LoginForm;
}(React.Component));
exports.LoginForm = LoginForm;
//# sourceMappingURL=LoginForm.js.map