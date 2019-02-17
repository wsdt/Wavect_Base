"use strict";
exports.__esModule = true;
var getstream_constants_1 = require("./getstream.constants");
exports.setUserToken = function (userName, userToken) {
    var _a;
    return ({
        type: getstream_constants_1.GS_CACHE_USERTOKEN,
        userTokens: (_a = {},
            _a[userName] = {
                userToken: userToken,
            },
            _a)
    });
};
