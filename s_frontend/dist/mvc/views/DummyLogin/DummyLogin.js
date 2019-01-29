"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("../../../scss/style.scss");
var DummyLogin = (function (_super) {
    __extends(DummyLogin, _super);
    function DummyLogin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { login: { username: "", password: "" } };
        _this.handleSubmit = function (e) {
            e.preventDefault();
        };
        _this.handleChangeUsername = function (e) {
            _this.setState({ login: { username: e.target.value, password: _this.state.login.password } });
        };
        _this.handleChangePassword = function (e) {
            _this.setState({ login: { username: _this.state.login.username, password: e.target.value } });
        };
        return _this;
    }
    DummyLogin.prototype.render = function () {
        return React.createElement("form", { onSubmit: this.handleSubmit, className: "formBlock" },
            React.createElement("div", { className: "inputBlock" },
                React.createElement("label", { htmlFor: "login_username" }, "Username"),
                React.createElement("br", null),
                React.createElement("input", { type: "text", onChange: this.handleChangeUsername, value: this.state.login.username })),
            React.createElement("div", { className: "inputBlock" },
                React.createElement("label", { htmlFor: "login_password" }, "Password"),
                React.createElement("br", null),
                React.createElement("input", { type: "password", onChange: this.handleChangePassword, value: this.state.login.password })),
            React.createElement("div", { className: "inputBlock" },
                React.createElement("input", { type: "submit", value: "Login" })));
    };
    return DummyLogin;
}(React.Component));
exports.DummyLogin = DummyLogin;
//# sourceMappingURL=DummyLogin.js.map