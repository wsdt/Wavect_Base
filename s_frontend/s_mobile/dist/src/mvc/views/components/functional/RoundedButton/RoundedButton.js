"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var native_base_1 = require("native-base");
var React = require("react");
var react_native_1 = require("react-native");
var RoundedButton_css_1 = require("./RoundedButton.css");
exports.RoundedButton = function (props) {
    return (<react_native_1.View style={RoundedButton_css_1.default.parentContainer}>
            <native_base_1.Button style={RoundedButton_css_1.default.button} onPress={props.press}>
                <native_base_1.Text style={RoundedButton_css_1.default.title}>{props.title}</native_base_1.Text>
            </native_base_1.Button>
        </react_native_1.View>);
};
//# sourceMappingURL=RoundedButton.js.map