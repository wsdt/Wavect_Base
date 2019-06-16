"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_elements_1 = require("react-native-elements");
var ChallengeCategory_1 = require("../../../../models/ChallengeCategory");
var ChallengeType_css_1 = require("./ChallengeType.css");
exports.ChallengeType = function (props) {
    return (<react_native_1.TouchableOpacity style={ChallengeType_css_1.default.touchableContainer}>
            <react_native_elements_1.Image source={ChallengeCategory_1.CHALLENGE_CATEGORIES[props.type]} containerStyle={ChallengeType_css_1.default.imageContainer} style={ChallengeType_css_1.default.image}/>
        </react_native_1.TouchableOpacity>);
};
exports.default = exports.ChallengeType;
//# sourceMappingURL=ChallengeType.js.map