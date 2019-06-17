"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var RoundedButton_1 = require("../../functional/RoundedButton/RoundedButton");
var react_native_1 = require("react-native");
exports.defaultNavigationOptions = {
    headerRight: (<RoundedButton_1.RoundedButton title="Feedback" press={function () { return react_native_1.Linking.openURL("mailto:support@bekind.com?subject=BeKind-Feedback&body=Was könnten wir verbessern?"); }}/>),
    headerStyle: {
        backgroundColor: "#fff",
        elevation: 0,
        shadowOpacity: 0,
        shadowRadius: 0,
    },
    headerTintColor: "#111",
    headerTitleStyle: {
        fontWeight: "bold",
    },
};
//# sourceMappingURL=RouterNavigationOptions.js.map