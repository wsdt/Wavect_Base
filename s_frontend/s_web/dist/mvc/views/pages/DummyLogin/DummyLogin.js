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
require("../../../../scss/style.scss");
var App_1 = require("../../App/App");
var App_constants_1 = require("../../App/App.constants");
var NavRouter_1 = require("../../NavRouter/NavRouter");
var OAuthFacebook_1 = require("../OAuth/OAuthFacebook/OAuthFacebook");
var OAuthInstagram_1 = require("../OAuth/OAuthInstagram/OAuthInstagram");
var DummyLogin_constants_1 = require("./DummyLogin.constants");
var DummyLogin = (function (_super) {
    __extends(DummyLogin, _super);
    function DummyLogin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleSubmit = function (e) {
            _this.queryGSUserToken();
            e.preventDefault();
        };
        _this.handleChangeUsername = function (e) {
            _this.setState({
                login: {
                    username: e.target.value,
                    password: _this.state.login.password,
                },
            });
        };
        _this.handleChangePassword = function (e) {
            _this.setState({
                login: {
                    username: _this.state.login.username,
                    password: e.target.value,
                },
            });
        };
        return _this;
    }
    DummyLogin.prototype.render = function () {
        var toRender;
        if (App_1.COOKIES.get(DummyLogin_constants_1.COOKIE_ID_GS_USERTOKEN) &&
            App_1.COOKIES.get(DummyLogin_constants_1.COOKIE_ID_USERID)) {
            toRender = (React.createElement(NavRouter_1.NAV_ROUTER, { userName: App_1.COOKIES.get(DummyLogin_constants_1.COOKIE_ID_USERID), userToken: App_1.COOKIES.get(DummyLogin_constants_1.COOKIE_ID_GS_USERTOKEN) }));
        }
        else {
            toRender = (React.createElement(React.Fragment, null,
                React.createElement(OAuthFacebook_1.OAuthFacebook, null),
                React.createElement(OAuthInstagram_1.OAuthInstagram, null)));
        }
        return toRender;
    };
    DummyLogin.prototype.queryGSUserToken = function () {
        var _this = this;
        console.log("DummyLogin:queryGSUserToken: Trying to log user in now.");
        fetch(App_constants_1.API_URL + "/auth/" + this.state.login.username)
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log("DummyLogin:queryGSUserToken: GetStream token retrieved.");
            App_1.COOKIES.set(DummyLogin_constants_1.COOKIE_ID_GS_USERTOKEN, data.token, {
                path: "/",
                secure: true,
                maxAge: 3000,
            });
            App_1.COOKIES.set(DummyLogin_constants_1.COOKIE_ID_USERID, _this.state.login.username, {
                path: "/",
                secure: true,
                maxAge: 3000,
            });
            console.log("DummyLogin:queryGSUserToken: Cookies created.");
            _this.forceUpdate();
            console.log("DummyLogin:queryGSUserToken: Have set cookie and queried, cached userToken from Getstream on React server -> " +
                data.token);
        })
            .catch(function (err) {
            console.error("App:connectToGetStream: Could not connect to getStream!", err);
        });
    };
    return DummyLogin;
}(React.Component));
exports.default = DummyLogin;
//# sourceMappingURL=DummyLogin.js.map