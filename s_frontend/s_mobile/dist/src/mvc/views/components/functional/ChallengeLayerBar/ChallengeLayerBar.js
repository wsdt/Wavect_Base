"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var native_base_1 = require("native-base");
var react_1 = require("react");
var react_native_1 = require("react-native");
var WarningsController_1 = require("../../../../controllers/WarningsController");
var ChallengeTypeIcon_1 = require("../ChallengeTypeIcon/ChallengeTypeIcon");
var CompanyLogo_1 = require("../CompanyLogo/CompanyLogo");
var MajorButton_1 = require("../MajorButton/MajorButton");
var ChallengeLayerBar_css_1 = require("./ChallengeLayerBar.css");
exports.ChallengeLayerBar = function (props) {
    var headline = props.headline, subline = props.subline, companyLogoUri = props.companyLogoUri, challengeCategoryUri = props.challengeCategoryUri, isGrayscale = props.isGrayscale;
    return (<react_native_1.View style={ChallengeLayerBar_css_1.default.mainComponent}>
            <CompanyLogo_1.CompanyLogo companyLogoUri={companyLogoUri} isGrayscale={isGrayscale}/>
            <ChallengeTypeIcon_1.ChallengeTypeIcon type={challengeCategoryUri}/>

            <react_native_1.View style={ChallengeLayerBar_css_1.default.bottomActionContainer}>
                <native_base_1.Text style={ChallengeLayerBar_css_1.default.headline}>{headline}</native_base_1.Text>
                <native_base_1.Text style={ChallengeLayerBar_css_1.default.subline}>{subline}</native_base_1.Text>
                <react_native_1.View style={ChallengeLayerBar_css_1.default.btnContainer}>
                    <MajorButton_1.MajorButton title="Ablehnen" btnType={MajorButton_1.MajorBtnType.SECONDARY} onPress={function () { return WarningsController_1.functionalityNotAvailable("Aktuell veröffentlichen wir nur eine Herausforderung gleichzeitig."); }}/>
                    <MajorButton_1.MajorButton title="Annehmen" btnType={MajorButton_1.MajorBtnType.PRIMARY}/>
                </react_native_1.View>
            </react_native_1.View>
        </react_native_1.View>);
};
//# sourceMappingURL=ChallengeLayerBar.js.map