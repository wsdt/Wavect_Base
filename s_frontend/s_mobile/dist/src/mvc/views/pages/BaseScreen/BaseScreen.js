"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var BaseScreen_css_1 = require("./BaseScreen.css");
var BottomTabNavigation_1 = require("../../components/stateful/BottomTabNavigation/BottomTabNavigation");
var react_navigation_1 = require("react-navigation");
exports.BaseScreen = function (props) {
    return <react_native_1.View style={BaseScreen_css_1.default.page}>
        <react_navigation_1.ScrollView>
            {props.children}
        </react_navigation_1.ScrollView>
        <BottomTabNavigation_1.BottomTabNavigation />
    </react_native_1.View>;
};
//# sourceMappingURL=BaseScreen.js.map