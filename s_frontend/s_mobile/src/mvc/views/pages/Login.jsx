"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var LoginForm_1 = require("../LoginForm");
var OAuth_1 = require("../OAuth");
exports.Login = function () {
    return <react_native_1.View>
        <LoginForm_1.LoginForm />
        <OAuth_1.OAuth />
    </react_native_1.View>;
};
