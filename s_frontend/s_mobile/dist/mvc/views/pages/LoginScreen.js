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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var styleBase = require("../../../scss/base.scss");
var parseScss_1 = require("../../../scss/parseScss");
var LoginForm_1 = require("../components/LoginForm/LoginForm");
var OAuth_1 = require("../components/OAuth/OAuth");
var LoginScreen = (function (_super) {
    __extends(LoginScreen, _super);
    function LoginScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginScreen.prototype.render = function () {
        return <react_native_1.View style={parseScss_1.default(styleBase.page)}>
            <react_native_1.View style={parseScss_1.default(styleBase.center)}>
                <LoginForm_1.LoginForm />
                <OAuth_1.OAuth />
            </react_native_1.View>
        </react_native_1.View>;
    };
    LoginScreen.navigationOptions = {
        title: "Login",
    };
    return LoginScreen;
}(React.Component));
exports.LoginScreen = LoginScreen;
//# sourceMappingURL=LoginScreen.js.map