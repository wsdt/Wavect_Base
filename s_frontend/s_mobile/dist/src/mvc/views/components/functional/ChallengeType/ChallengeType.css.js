"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var GlobalStyles_css_1 = require("../../../GlobalStyles.css");
var roundRadius = 500;
var styles = react_native_1.StyleSheet.create({
    image: {
        height: "75%",
        width: "75%",
    },
    imageContainer: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: roundRadius,
        width: 47,
        height: 47,
        backgroundColor: GlobalStyles_css_1.GREY,
    },
    touchableContainer: {
        alignSelf: "flex-end",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -5,
        marginRight: -2,
        borderRadius: roundRadius,
        width: 60,
        height: 60,
        backgroundColor: "#fff",
    },
});
exports.default = styles;
//# sourceMappingURL=ChallengeType.css.js.map