"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
exports.GREY = "#9b9b9b";
var globalStyles = react_native_1.StyleSheet.create({
    absoluteCenter: {
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    tooltipText: {
        color: "#fff",
    },
    fullSize: {
        height: "100%",
        width: "100%",
    },
    radius: {
        borderRadius: 15,
    },
    center: {
        justifyContent: "center",
        alignItems: "center",
    },
});
exports.default = globalStyles;
