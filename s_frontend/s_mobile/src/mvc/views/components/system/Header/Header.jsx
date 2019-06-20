"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
var React = require("react")
var react_native_1 = require("react-native")
var react_native_elements_1 = require("react-native-elements")
var RoundedButton_1 = require("../../functional/RoundedButton/RoundedButton")
var Header_css_1 = require("./Header.css")
exports.Header = function(props) {
    return (
        <react_native_1.View style={Header_css_1.default.container}>
            <react_native_elements_1.Text h4 style={Header_css_1.default.titleContainer}>
                {props.title}
            </react_native_elements_1.Text>
            <RoundedButton_1.RoundedButton
                containerStyle={Header_css_1.default.btnContainer}
                title={props.btnTitle}
                press={function() {
                    return react_native_1.Linking.openURL(props.btnLink)
                }}
            />
        </react_native_1.View>
    )
}
