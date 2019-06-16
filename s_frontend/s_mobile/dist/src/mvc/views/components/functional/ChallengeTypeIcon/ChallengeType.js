"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_elements_1 = require("react-native-elements");
var ChallengeCategory_1 = require("../../../../models/ChallengeCategory");
var ChallengeTypeIcon_css_1 = require("./ChallengeTypeIcon.css");
exports.ChallengeType = function (props) {
    return (<react_native_1.TouchableOpacity style={ChallengeTypeIcon_css_1.default.touchableContainer}>
            <react_native_elements_1.Image source={ChallengeCategory_1.CHALLENGE_CATEGORIES[props.type]} containerStyle={ChallengeTypeIcon_css_1.default.imageContainer} style={ChallengeTypeIcon_css_1.default.image}/>
        </react_native_1.TouchableOpacity>);
};
exports.default = exports.ChallengeType;
//# sourceMappingURL=ChallengeType.js.map