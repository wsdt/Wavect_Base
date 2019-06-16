"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var GlobalStyles_css_1 = require("../../../GlobalStyles.css");
var ChallengeLayerBar_1 = require("../../functional/ChallengeLayerBar/ChallengeLayerBar");
var GrayColorImg_1 = require("../../functional/GrayColorImg/GrayColorImg");
var LoadingIndicator_1 = require("../../functional/LoadingIndicator/LoadingIndicator");
var ChallengeFullpage_css_1 = require("./ChallengeFullpage.css");
var ChallengeFullpage = (function (_super) {
    __extends(ChallengeFullpage, _super);
    function ChallengeFullpage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isGrayscale: true,
            isLoading: true,
        };
        _this.getInnerComponents = function () {
            if (_this.state.isLoading) {
                return <LoadingIndicator_1.LoadingIndicator />;
            }
            var _a = _this.props.challenge, headline = _a.headline, subline = _a.subline, companyLogoUri = _a.companyLogoUri, majorCategory = _a.majorCategory;
            return <ChallengeLayerBar_1.ChallengeLayerBar headline={headline} subline={subline} challengeCategoryUri={majorCategory} companyLogoUri={companyLogoUri} isGrayscale={_this.state.isGrayscale}/>;
        };
        _this.onLoad = function () {
            _this.setState(function (prevState) { return (__assign({}, prevState, { isLoading: false })); });
        };
        return _this;
    }
    ChallengeFullpage.prototype.render = function () {
        var bgImage = this.props.challenge.bgImage;
        return (<GrayColorImg_1.GrayColorImg isGrayscale={this.state.isGrayscale}>
                <react_native_1.ImageBackground source={bgImage} imageStyle={GlobalStyles_css_1.default.radius} onLoad={this.onLoad} style={ChallengeFullpage_css_1.default.container}>
                    {this.getInnerComponents()}
                </react_native_1.ImageBackground>
            </GrayColorImg_1.GrayColorImg>);
    };
    return ChallengeFullpage;
}(React.PureComponent));
exports.ChallengeFullpage = ChallengeFullpage;
//# sourceMappingURL=ChallengeFullpage.js.map