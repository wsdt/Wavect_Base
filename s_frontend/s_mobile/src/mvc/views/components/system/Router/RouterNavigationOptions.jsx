"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var RoundedButton_1 = require("../../functional/RoundedButton/RoundedButton");
var react_native_1 = require("react-native");
/**
 * You can provide custom navigationoptions for your nav bar for each page.
 * But if you don't provide any, then these default options are set.
 */
exports.defaultNavigationOptions = {
    headerRight: (<RoundedButton_1.RoundedButton title="Feedback" press={function () { return react_native_1.Linking.openURL("mailto:support@bekind.com?subject=BeKind-Feedback&body=Was könnten wir verbessern?"); }}/>),
    headerStyle: {
        backgroundColor: "#fff",
        elevation: 0,
        shadowOpacity: 0,
        shadowRadius: 0,
    },
    headerTintColor: "#111" /* tintColor is used by title and back btn etc. */,
    headerTitleStyle: {
        fontWeight: "bold",
    },
};
/* In case shadow is on IOS or Android still there
    shadowOffset: {
    height: 0,} */
