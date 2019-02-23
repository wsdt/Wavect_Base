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
var oAuthParent_1 = require("./oAuthParent");
var OAuthLinkedin = (function (_super) {
    __extends(OAuthLinkedin, _super);
    function OAuthLinkedin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OAuthLinkedin.prototype.authenticate = function () {
        return Promise.resolve("Not Implemented");
    };
    return OAuthLinkedin;
}(oAuthParent_1.OAuthParent));
exports.OAuthLinkedin = OAuthLinkedin;
//# sourceMappingURL=oAuthLinkedin.js.map