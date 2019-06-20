"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var GlobalStyles_css_1 = require("../../../GlobalStyles.css");
/** Convenience component to make loadingIndicator more concise. */
exports.LoadingIndicator = function () {
    return <react_native_1.ActivityIndicator size="large" color="#000000" style={GlobalStyles_css_1.default.absoluteCenter}/>;
};
