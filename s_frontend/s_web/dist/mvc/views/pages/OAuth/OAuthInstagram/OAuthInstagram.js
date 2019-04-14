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
var react_instagram_login_1 = require("react-instagram-login");
var OAuthInstagram = (function (_super) {
    __extends(OAuthInstagram, _super);
    function OAuthInstagram() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.printErr = function (err) {
            console.error(JSON.stringify(err));
        };
        _this.printRes = function (res) {
            console.log(JSON.stringify(res));
        };
        return _this;
    }
    OAuthInstagram.prototype.render = function () {
        return (React.createElement(react_instagram_login_1.default, { clientId: "4e73bfb500a2415ab71a9d77d1e437f3", buttonText: "Instagram Login", onSuccess: this.printRes, onFailure: this.printErr }));
    };
    return OAuthInstagram;
}(React.Component));
exports.OAuthInstagram = OAuthInstagram;
//# sourceMappingURL=OAuthInstagram.js.map