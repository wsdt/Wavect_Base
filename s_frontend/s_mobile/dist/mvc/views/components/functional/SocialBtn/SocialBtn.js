"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var react_native_elements_1 = require("react-native-elements");
var styleBase = require("../../../../../scss/base.scss");
var parseScss_1 = require("../../../../../scss/parseScss");
exports.SocialBtn = function (props) {
    return <react_native_1.TouchableOpacity onPress={function () { return props.authCallback; }}>
        <react_native_elements_1.SocialIcon type={props.socialType} button light style={parseScss_1.default(styleBase.gridElem)}/>
    </react_native_1.TouchableOpacity>;
};
//# sourceMappingURL=SocialBtn.js.map