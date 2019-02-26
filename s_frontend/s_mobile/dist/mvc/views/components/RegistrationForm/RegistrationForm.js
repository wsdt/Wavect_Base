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
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_elements_1 = require("react-native-elements");
var react_native_formik_1 = require("react-native-formik");
var WarningsController_1 = require("../../../controllers/WarningsController");
var RegistrationForm_yup_1 = require("./RegistrationForm.yup");
var acceptableValues = { firstname: "", lastname: "", email: "", emailCheck: "", pw: "", pwCheck: "" };
var FormikInput = react_native_formik_1.handleTextInput(react_native_elements_1.Input);
var RegistrationForm = (function (_super) {
    __extends(RegistrationForm, _super);
    function RegistrationForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            hidden: true,
            hiddenCheck: true
        };
        _this.renderForm = function (_a) {
            var values = _a.values, isSubmitting = _a.isSubmitting, handleSubmit = _a.handleSubmit, touched = _a.touched, errors = _a.errors;
            return <react_native_1.View>
            <FormikInput label="Firstname" name="firstname" type="firstname" placeholder="Max" value={values.firstname} editable={!isSubmitting} errorMessage={(touched.firstname && errors.firstname ? errors.firstname.toString() : undefined)}/>
            <FormikInput label="Lastname" name="lastname" type="lastname" placeholder="Mustermann" value={values.lastname} editable={!isSubmitting} errorMessage={(touched.lastname && errors.lastname ? errors.lastname.toString() : undefined)}/>
            <FormikInput label="Email" name="email" type="email" placeholder="max.mustermann@chello.at" value={values.email} editable={!isSubmitting} errorMessage={(touched.email && errors.email ? errors.email.toString() : undefined)}/>
            <FormikInput label="Confirm Email" name="emailCheck" type="emailCheck" placeholder="max.mustermann@chello.at" value={values.emailCheck} editable={!isSubmitting} errorMessage={(touched.emailCheck && errors.emailCheck ? errors.emailCheck.toString() : undefined)}/>

            <FormikInput label="Password" name="pw" type="pw" secureTextEntry={_this.state.hidden} placeholder="*****" value={values.pw} editable={!isSubmitting} rightIcon={{ type: "feather", name: "eye", color: "#ccc", size: 18, onPress: function () { return _this.isHiddenHandler(false); } }} errorMessage={(touched.pw && errors.pw ? errors.pw.toString() : undefined)}/>

            <FormikInput label="Confirm Password" name="pwCheck" secureTextEntry={_this.state.hiddenCheck} type="pwCheck" placeholder="*****" value={values.pwCheck} editable={!isSubmitting} rightIcon={{ type: "feather", name: "eye", color: "#ccc", size: 18, onPress: function () { return _this.isHiddenHandler(true); } }} errorMessage={(touched.pwCheck && errors.pwCheck ? errors.pwCheck.toString() : undefined)}/>

            <react_native_elements_1.Button title="Confirm" onPress={handleSubmit} loading={isSubmitting} disabled={isSubmitting}/>

        </react_native_1.View>;
        };
        _this.isHiddenHandler = function (isCheck) {
            if (isCheck) {
                _this.setState(function (prevState) {
                    return __assign({}, prevState, { hiddenCheck: !prevState.hiddenCheck });
                });
            }
            else {
                _this.setState(function (prevState) {
                    return __assign({}, prevState, { hidden: !prevState.hidden });
                });
            }
        };
        _this.isSubmittingHandler = function (values, formikbag) {
            formikbag.setSubmitting(true);
            WarningsController_1.notImplementedSync();
            setTimeout(function () {
                formikbag.setSubmitting(false);
            }, 2000);
        };
        return _this;
    }
    RegistrationForm.prototype.render = function () {
        var _this = this;
        return <formik_1.Formik initialValues={acceptableValues} validationSchema={RegistrationForm_yup_1.default} onSubmit={function (formikValue, formikbag) { _this.isSubmittingHandler(formikValue, formikbag); }} render={function (formikbag) { return _this.renderForm(formikbag); }}/>;
    };
    return RegistrationForm;
}(react_1.Component));
exports.RegistrationForm = RegistrationForm;
//# sourceMappingURL=RegistrationForm.js.map