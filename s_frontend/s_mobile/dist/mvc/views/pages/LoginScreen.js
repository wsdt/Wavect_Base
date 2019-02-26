"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var styleBase = require("../../../scss/base.scss");
var parseScss_1 = require("../../../scss/parseScss");
var LoginForm_1 = require("../components/LoginForm/LoginForm");
var OAuth_1 = require("../components/OAuth/OAuth");
exports.LoginScreen = function () {
    return <react_native_1.View style={parseScss_1.default(styleBase.page)}>
        <react_native_1.View style={parseScss_1.default(styleBase.center)}>
            <LoginForm_1.LoginForm />
            <OAuth_1.OAuth />
        </react_native_1.View>
    </react_native_1.View>;
};
//# sourceMappingURL=LoginScreen.js.map