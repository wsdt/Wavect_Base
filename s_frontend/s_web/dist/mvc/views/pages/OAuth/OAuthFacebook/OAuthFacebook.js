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
var react_facebook_login_1 = require("react-facebook-login");
var OAuthFacebook = /** @class */ (function (_super) {
    __extends(OAuthFacebook, _super);
    function OAuthFacebook() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.printRes = function (res) {
            console.log(JSON.stringify(res));
        };
        return _this;
    }
    OAuthFacebook.prototype.render = function () {
        return React.createElement(react_facebook_login_1["default"], { appId: "385939391982964", callback: this.printRes });
    };
    return OAuthFacebook;
}(React.Component));
exports.OAuthFacebook = OAuthFacebook;
