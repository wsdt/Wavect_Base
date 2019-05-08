"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var parseScss_1 = require("../../../controllers/parseScss");
var styles = require("./BaseScreen.scss");
var react_native_1 = require("react-native");
exports.BaseScreen = function (props) {
    /* Pass all children as we want to have custom pages */
    // <SafeAreaView  forceInset={{ top: "always" }}> ==> might be needed in future (getstream, in general for unusual displays etc. (but warnings, input errors?)...
    return <react_native_1.View style={parseScss_1.default(styles.page)}>{props.children}</react_native_1.View>;
};
