"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_elements_1 = require("react-native-elements");
var ChallengeLayerBar_css_1 = require("./ChallengeLayerBar.css");
exports.ChallengeLayerBar = function (props) {
    var headline = props.headline, subline = props.subline, company = props.company;
    return (<react_native_1.View style={ChallengeLayerBar_css_1.default.mainComponent}>
            <react_native_1.View style={ChallengeLayerBar_css_1.default.topLeftCompany}>
                <react_native_elements_1.Button title={company} type="outline" titleStyle={ChallengeLayerBar_css_1.default.btnTitleWhiteColor} buttonStyle={ChallengeLayerBar_css_1.default.btnStyleTransparent}/>
            </react_native_1.View>

            <react_native_1.View style={ChallengeLayerBar_css_1.default.topRightSymbol}>
                <react_native_elements_1.Button title="" type="outline" titleStyle={ChallengeLayerBar_css_1.default.btnTitleStandard} buttonStyle={ChallengeLayerBar_css_1.default.btnStyleTransparent}/>
            </react_native_1.View>

            <react_native_1.View style={ChallengeLayerBar_css_1.default.bottomActionContainer}>
                <react_native_elements_1.Text style={ChallengeLayerBar_css_1.default.headline}>{headline}</react_native_elements_1.Text>
                <react_native_elements_1.Text style={ChallengeLayerBar_css_1.default.subline}>{subline}</react_native_elements_1.Text>
                <react_native_1.View style={ChallengeLayerBar_css_1.default.container}>
                    <react_native_1.View style={ChallengeLayerBar_css_1.default.buttonContainer}>
                        <react_native_elements_1.Button title="Ablehnen" type="outline" titleStyle={ChallengeLayerBar_css_1.default.btnTitleStandard} buttonStyle={ChallengeLayerBar_css_1.default.btnStyleWithBorder}/>
                    </react_native_1.View>

                    <react_native_1.View style={ChallengeLayerBar_css_1.default.buttonContainer2}>
                        <react_native_elements_1.Button title="Annehmen" type="outline" titleStyle={ChallengeLayerBar_css_1.default.btnTitleStandard} buttonStyle={ChallengeLayerBar_css_1.default.btnStyleWithBorder}/>
                    </react_native_1.View>
                </react_native_1.View>
            </react_native_1.View>
        </react_native_1.View>);
};
//# sourceMappingURL=ChallengeLayerBar.js.map