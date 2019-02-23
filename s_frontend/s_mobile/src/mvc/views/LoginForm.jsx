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
var react_native_elements_1 = require("react-native-elements");
var styleBase = require("../../scss/base.scss");
var parseScss_1 = require("../../scss/parseScss");
var LoginForm = /** @class */ (function (_super) {
    __extends(LoginForm, _super);
    function LoginForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            btnGroup: {
                selectedIndex: 0,
            }
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
            // TODO
        };
        _this.onRegisterBtnPress = function () {
            // TODO
        };
        _this.onPwdForgottenBtnPress = function () {
            // TODO
        };
        return _this;
    }
    LoginForm.prototype.render = function () {
        return (<react_native_1.View style={parseScss_1.default(styleBase.container)}>
                <react_native_elements_1.Text h1> Log In</react_native_elements_1.Text>
                <react_native_elements_1.Input label="Username" placeholder="Username"/>
                <react_native_elements_1.Input label="Password" placeholder="Password" secureTextEntry={true}/>

                <react_native_elements_1.ButtonGroup selectedIndex={this.state.btnGroup.selectedIndex} buttons={["Login", "Register", "Forgot password"]} onPress={this.onRegLoginPress} containerStyle={{ height: 35 }}/>
            </react_native_1.View>);
    };
    return LoginForm;
}(React.Component));
exports.LoginForm = LoginForm;
