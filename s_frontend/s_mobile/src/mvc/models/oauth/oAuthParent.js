"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WarningsController_1 = require("../../controllers/WarningsController");
var OAuthParent = /** @class */ (function () {
    function OAuthParent() {
    }
    OAuthParent.authenticate = function () {
        return WarningsController_1.notImplementedAsync();
    };
    return OAuthParent;
}());
exports.OAuthParent = OAuthParent;