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
var React = require("react");
var Newsfeed_1 = require("../Newsfeed/Newsfeed");
exports.HOME = function (props) {
    return React.createElement(React.Fragment, null,
        React.createElement("h2", null, "Home"),
        React.createElement(Newsfeed_1.default, __assign({}, props)));
};
//# sourceMappingURL=Home.js.map