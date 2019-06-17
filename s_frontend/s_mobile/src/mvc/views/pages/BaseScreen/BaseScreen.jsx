"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var BaseScreen_css_1 = require("./BaseScreen.css");
var BottomTabNavigation_1 = require("../../components/stateful/BottomTabNavigation/BottomTabNavigation");
exports.BaseScreen = function (props) {
    /* Pass all children as we want to have custom pages */
    // <SafeAreaView  forceInset={{ top: "always" }}> ==> might be needed in future (getstream, in general for unusual displays etc. (but warnings, input errors?)...
    return (<react_native_1.View style={BaseScreen_css_1.default.page}>
            <react_native_1.ScrollView>{props.children}</react_native_1.ScrollView>
            <BottomTabNavigation_1.BottomTabNavigation />
        </react_native_1.View>);
};
