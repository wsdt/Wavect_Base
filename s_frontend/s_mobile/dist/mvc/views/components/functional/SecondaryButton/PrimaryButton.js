"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var SecondaryButton_css_1 = require("./SecondaryButton.css");
var react_native_elements_1 = require("react-native-elements");
exports.SecondaryButton = function (props) {
    var title = props.title;
    return <react_native_1.View style={SecondaryButton_css_1.default.buttonContainer}>
        <react_native_elements_1.Button title={title} type="outline" titleStyle={SecondaryButton_css_1.default.btnTitleStandard} buttonStyle={SecondaryButton_css_1.default.btnStyleWithBorder}/>
    </react_native_1.View>;
};
//# sourceMappingURL=PrimaryButton.js.map