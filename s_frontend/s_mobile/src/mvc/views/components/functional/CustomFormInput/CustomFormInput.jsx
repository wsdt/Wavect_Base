"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_elements_1 = require("react-native-elements");
var react_native_formik_1 = require("react-native-formik");
var formStyle = require("../../../../../scss/form.scss");
var parseScss_1 = require("../../../../../scss/parseScss");
/** Custom Form Input */
exports.CustomFormInput = function (props) {
    var TmpFormInput = react_native_formik_1.handleTextInput(react_native_elements_1.Input);
    return <TmpFormInput {...props} containerStyle={parseScss_1.default(formStyle.input)}/>;
};
