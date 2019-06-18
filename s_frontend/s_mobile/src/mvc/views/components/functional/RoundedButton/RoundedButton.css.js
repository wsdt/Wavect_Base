"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
var react_native_1 = require("react-native")
var GlobalStyles_css_1 = require("../../../GlobalStyles.css")
var styles = react_native_1.StyleSheet.create({
    button: {
        backgroundColor: GlobalStyles_css_1.GREY,
        borderRadius: 5,
    },
    container: {
        marginTop: 10,
    },
    parentContainer: {
        marginRight: 5,
    },
    title: {
        color: "#fff",
    },
})
exports.default = styles
