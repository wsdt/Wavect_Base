"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stream = require("getstream");
var GetStreamController_constants_1 = require("./GetStreamController.constants");
exports.GETSTREAM = getGetStreamConn();
function getGetStreamConn() {
    return stream.connect(GetStreamController_constants_1.GS_KEY, GetStreamController_constants_1.GS_SECRET, GetStreamController_constants_1.GS_APP_ID);
}
function createUserToken(userId) {
    return exports.GETSTREAM.createUserToken(userId);
}
exports.createUserToken = createUserToken;
//# sourceMappingURL=GetStreamController.js.map