"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var login_constants_1 = require("../actions/login.constants");
exports.DEFAULT_STATE = {
    userName: ''
};
function reducer(state, action) {
    if (state === void 0) { state = exports.DEFAULT_STATE; }
    switch (action.type) {
        case login_constants_1.LOG_IN:
            return __assign({}, state, { userName: action.userName });
        default: return state;
    }
}
exports.default = reducer;
//# sourceMappingURL=index.js.map