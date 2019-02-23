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
var React = require("react");
var react_native_1 = require("react-native");
var react_native_elements_1 = require("react-native-elements");
var parseScss_1 = require("../../scss/parseScss");
var baseStyle = require("../../scss/base.scss");
var formStyle = require("../../scss/form.scss");
var LoginForm = (function (_super) {
    __extends(LoginForm, _super);
    function LoginForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            btnGroup: {
                selectedIndex: 0,
            },
            pwdHidden: true,
        };
        _this.togglePwdVisibility = function () {
            _this.setState(function (prevState) {
                return __assign({}, prevState, { pwdHidden: !prevState.pwdHidden });
            });
        };
        _this.onRegLoginPress = function (selectedIndex) {
            switch (selectedIndex) {
                case 0:
                    _this.onLoginBtnPress();
                    break;
                case 1:
                    _this.onRegisterBtnPress();
                    break;
                case 2:
                    _this.onPwdForgottenBtnPress();
                    break;
                default:
                    console.error("onRegLoginPress: Unknown button.");
            }
            _this.setState({ btnGroup: { selectedIndex: selectedIndex } });
        };
        _this.onLoginBtnPress = function () {
        };
        _this.onRegisterBtnPress = function () {
        };
        _this.onPwdForgottenBtnPress = function () {
        };
        return _this;
    }
    LoginForm.prototype.render = function () {
        var rightPwdIcon = (this.state.pwdHidden) ? "eye" : "eye-off";
        return (<react_native_1.View style={parseScss_1.default(baseStyle.container)}>
                <react_native_elements_1.Input label="Username" placeholder="Ernesto" leftIcon={{ type: "feather", name: "user", size: 15, color: "grey" }} containerStyle={parseScss_1.default(formStyle.listElem)} labelStyle={parseScss_1.default(formStyle.textLabel)} leftIconContainerStyle={parseScss_1.default(formStyle.leftIconContainer)}/>
                <react_native_elements_1.Input label="Password" placeholder="Your secret password" secureTextEntry={this.state.pwdHidden} leftIcon={{ type: "feather", name: "lock", size: 15, color: "grey" }} rightIcon={{ type: "feather", name: rightPwdIcon, size: 18, color: "grey", onPress: this.togglePwdVisibility }} containerStyle={parseScss_1.default(formStyle.listElem)} labelStyle={parseScss_1.default(formStyle.textLabel)} leftIconContainerStyle={parseScss_1.default(formStyle.leftIconContainer)} rightIconContainerStyle={parseScss_1.default(formStyle.rightIconContainer)}/>

                <react_native_elements_1.ButtonGroup selectedIndex={this.state.btnGroup.selectedIndex} buttons={["Login", "Register", "Forgotten"]} onPress={this.onRegLoginPress} containerStyle={{ height: 35 }}/>
            </react_native_1.View>);
    };
    return LoginForm;
}(React.Component));
exports.LoginForm = LoginForm;
//# sourceMappingURL=LoginForm.js.map