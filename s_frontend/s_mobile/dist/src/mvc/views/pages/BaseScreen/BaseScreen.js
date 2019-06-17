"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var BaseScreen_css_1 = require("./BaseScreen.css");
exports.BaseScreen = function (props) {
    return <react_native_1.View style={BaseScreen_css_1.default.page}>{props.children}</react_native_1.View>;
};
//# sourceMappingURL=BaseScreen.js.map