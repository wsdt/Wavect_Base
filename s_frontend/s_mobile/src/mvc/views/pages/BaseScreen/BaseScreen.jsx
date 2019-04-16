"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_navigation_1 = require("react-navigation");
var parseScss_1 = require("../../../controllers/parseScss");
var styles = require("./BaseScreen.scss");
exports.BaseScreen = function (props) {
    /* Pass all children as we want to have custom pages */
    return <react_navigation_1.SafeAreaView style={parseScss_1.default(styles.page)} forceInset={{ top: "always" }}>
            {props.children}
        </react_navigation_1.SafeAreaView>;
};
