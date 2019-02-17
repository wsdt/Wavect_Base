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
exports.__esModule = true;
var React = require("react");
var react_google_login_1 = require("react-google-login");
var OAuthGoogle = /** @class */ (function (_super) {
    __extends(OAuthGoogle, _super);
    function OAuthGoogle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.printRes = function (res) {
            console.log(JSON.stringify(res));
        };
        _this.printErr = function (err) {
            console.error(JSON.stringify(err));
        };
        return _this;
    }
    OAuthGoogle.prototype.render = function () {
        return React.createElement(react_google_login_1.GoogleLogin, { clientId: "", buttonText: "Google Login", onSuccess: this.printRes, onFailure: this.printErr });
    };
    return OAuthGoogle;
}(React.Component));
exports.OAuthGoogle = OAuthGoogle;
