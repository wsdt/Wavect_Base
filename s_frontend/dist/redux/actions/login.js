"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_constants_1 = require("./login.constants");
exports.setCurrentUsername = function (userName) { return ({
    type: login_constants_1.LOG_IN,
    userName: userName
}); };
//# sourceMappingURL=login.js.map