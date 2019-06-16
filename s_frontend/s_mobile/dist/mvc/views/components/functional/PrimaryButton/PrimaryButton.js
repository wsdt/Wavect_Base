"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var PrimaryButton_css_1 = require("./PrimaryButton.css");
var react_native_elements_1 = require("react-native-elements");
exports.PrimaryButton = function (props) {
    var containerStyle = (props.btnType === 0) ? PrimaryButton_css_1.default.primaryBtnContainer : PrimaryButton_css_1.default.secondaryBtnContainer;
    var title = props.title;
    return <react_native_1.View style={containerStyle}>
        <react_native_elements_1.Button title={title} type="outline" titleStyle={PrimaryButton_css_1.default.btnTitleStandard} buttonStyle={PrimaryButton_css_1.default.btnStyleWithBorder}/>
    </react_native_1.View>;
};
var BtnType;
(function (BtnType) {
    BtnType[BtnType["PRIMARY"] = 0] = "PRIMARY";
    BtnType[BtnType["SECONDARY"] = 1] = "SECONDARY";
})(BtnType = exports.BtnType || (exports.BtnType = {}));
//# sourceMappingURL=PrimaryButton.js.map