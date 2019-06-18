"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_elements_1 = require("react-native-elements");
var MajorButton_css_1 = require("./MajorButton.css");
exports.MajorButton = function (props) {
    // TODO: Allow to provide custom style obj (merge here) e.g. flex dynamic
    var containerStyle = props.btnType === MajorBtnType.PRIMARY ? MajorButton_css_1.default.primaryBtnContainer : MajorButton_css_1.default.secondaryBtnContainer;
    var title = props.title, onPress = props.onPress;
    return (<react_native_1.View style={containerStyle}>
            <react_native_elements_1.Button title={title} type="outline" titleStyle={MajorButton_css_1.default.btnTitleStandard} buttonStyle={MajorButton_css_1.default.btnStyleWithBorder} onPress={onPress}/>
        </react_native_1.View>);
};
var MajorBtnType;
(function (MajorBtnType) {
    MajorBtnType[MajorBtnType["PRIMARY"] = 0] = "PRIMARY";
    MajorBtnType[MajorBtnType["SECONDARY"] = 1] = "SECONDARY";
})(MajorBtnType = exports.MajorBtnType || (exports.MajorBtnType = {}));
