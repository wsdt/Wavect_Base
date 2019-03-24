"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
var WarningsController_1 = require("../../controllers/WarningsController")
var OAuthParent = /** @class */ (function() {
    function _oAuthParent() {}
    _oAuthParent.authenticate = function() {
        return WarningsController_1.notImplementedAsync()
    }
    return _oAuthParent
})()
exports._oAuthParent = _oAuthParent
