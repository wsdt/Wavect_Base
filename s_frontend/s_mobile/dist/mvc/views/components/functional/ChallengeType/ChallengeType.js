"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var ChallengeLayerBar_css_1 = require("../ChallengeLayerBar/ChallengeLayerBar.css");
var react_native_elements_1 = require("react-native-elements");
exports.ChallengeType = function (props) {
    return (<react_native_1.TouchableOpacity style={ChallengeLayerBar_css_1.default.topRightSymbol}>
            <react_native_elements_1.Image source={{
        uri: 'https://aboutreact.com/wp-content/uploads/2018/08/google-plus.png',
    }}/>

        </react_native_1.TouchableOpacity>);
};
exports.default = exports.ChallengeType;
//# sourceMappingURL=ChallengeType.js.map