"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'LOG_IN':
            return state.concat([
                {
                    id: action.id,
                    userName: action.userName
                }
            ]);
        default: return state;
    }
};
exports.default = login;
//# sourceMappingURL=login.js.map