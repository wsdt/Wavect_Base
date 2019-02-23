"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OAuthType;
(function (OAuthType) {
    OAuthType[OAuthType["FACEBOOK"] = 0] = "FACEBOOK";
    OAuthType[OAuthType["INSTAGRAM"] = 1] = "INSTAGRAM";
    OAuthType[OAuthType["TWITTER"] = 2] = "TWITTER";
    OAuthType[OAuthType["GITHUB"] = 3] = "GITHUB";
    OAuthType[OAuthType["LINKEDIN"] = 4] = "LINKEDIN";
    OAuthType[OAuthType["YOUTUBE"] = 5] = "YOUTUBE";
})(OAuthType = exports.OAuthType || (exports.OAuthType = {}));
exports.authenticate = function (oAuthType) {
    switch (oAuthType) {
        case OAuthType.FACEBOOK: break;
        case OAuthType.INSTAGRAM: break;
        case OAuthType.TWITTER: break;
        case OAuthType.YOUTUBE: break;
        case OAuthType.LINKEDIN: break;
        case OAuthType.GITHUB: break;
        default: console.error("authenticate: Unknown oAuth type.");
    }
};
//# sourceMappingURL=oAuthController.js.map