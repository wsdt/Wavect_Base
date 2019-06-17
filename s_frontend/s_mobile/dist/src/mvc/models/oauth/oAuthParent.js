"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WarningsController_1 = require("../../controllers/WarningsController");
var OAuthParent = (function () {
    function OAuthParent() {
    }
    OAuthParent.authenticate = function () {
        return WarningsController_1.functionalityNotAvailable();
    };
    return OAuthParent;
}());
exports.OAuthParent = OAuthParent;
//# sourceMappingURL=oAuthParent.js.map