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
var oAuthParent_1 = require("../oAuthParent");
var OAuthFacebook = (function (_super) {
    __extends(OAuthFacebook, _super);
    function OAuthFacebook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OAuthFacebook;
}(oAuthParent_1.OAuthParent));
exports.OAuthFacebook = OAuthFacebook;
//# sourceMappingURL=oAuthFacebook.js.map