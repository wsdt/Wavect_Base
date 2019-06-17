"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_elements_1 = require("react-native-elements");
var React = require("react");
var react_native_1 = require("react-native");
var RoundedButton_css_1 = require("./RoundedButton.css");
exports.RoundedButton = function (props) {
    var BadgedBtn = react_native_elements_1.withBadge()(react_native_elements_1.Button);
    return (<react_native_1.View style={RoundedButton_css_1.default.parentContainer}>
            <BadgedBtn buttonStyle={RoundedButton_css_1.default.button} onPress={props.press} title={props.title} titleStyle={RoundedButton_css_1.default.title}/>
        </react_native_1.View>);
};
//# sourceMappingURL=RoundedButton.js.map