"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_elements_1 = require("react-native-elements");
var MajorButton_1 = require("../MajorButton/MajorButton");
var ChallengeLayerBar_css_1 = require("./ChallengeLayerBar.css");
var ChallengeType_1 = require("../ChallengeType/ChallengeType");
exports.ChallengeLayerBar = function (props) {
    var headline = props.headline, subline = props.subline, company = props.company;
    return (<react_native_1.View style={ChallengeLayerBar_css_1.default.mainComponent}>
            <react_native_1.View style={ChallengeLayerBar_css_1.default.topLeftCompany}>
                <react_native_elements_1.Button title={company} type="outline" titleStyle={ChallengeLayerBar_css_1.default.btnTitleWhiteColor} buttonStyle={ChallengeLayerBar_css_1.default.btnStyleTransparent}/>
            </react_native_1.View>

            <ChallengeType_1.default />

            <react_native_1.View style={ChallengeLayerBar_css_1.default.bottomActionContainer}>
                <react_native_elements_1.Text style={ChallengeLayerBar_css_1.default.headline}>{headline}</react_native_elements_1.Text>
                <react_native_elements_1.Text style={ChallengeLayerBar_css_1.default.subline}>{subline}</react_native_elements_1.Text>
                <react_native_1.View style={ChallengeLayerBar_css_1.default.container}>
                    <MajorButton_1.MajorButton title="Ablehnen" btnType={MajorButton_1.MajorBtnType.SECONDARY}/>
                    <MajorButton_1.MajorButton title="Annehmen" btnType={MajorButton_1.MajorBtnType.PRIMARY}/>
                </react_native_1.View>
            </react_native_1.View>
        </react_native_1.View>);
};
//# sourceMappingURL=ChallengeLayerBar.js.map