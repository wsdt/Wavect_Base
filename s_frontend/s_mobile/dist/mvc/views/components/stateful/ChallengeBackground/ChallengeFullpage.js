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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var GlobalStyles_css_1 = require("../../../GlobalStyles.css");
var ChallengeLayerBar_1 = require("../../functional/ChallengeLayerBar/ChallengeLayerBar");
var GrayColorImg_1 = require("../../functional/GrayColorImg/GrayColorImg");
var ChallengeFullpage_css_1 = require("./ChallengeFullpage.css");
var ChallengeFullpage = (function (_super) {
    __extends(ChallengeFullpage, _super);
    function ChallengeFullpage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isGrayscale: true,
        };
        return _this;
    }
    ChallengeFullpage.prototype.render = function () {
        return <GrayColorImg_1.GrayColorImg isGrayscale={this.state.isGrayscale}>
            <react_native_1.ImageBackground source={this.props.backgroundImg} imageStyle={GlobalStyles_css_1.default.radius} style={ChallengeFullpage_css_1.default.container}>
                <ChallengeLayerBar_1.ChallengeLayerBar headline={"Laugh2gether"} subline={"Bring einen Freund zum Lachen und mache dabei ein Video"} company={"Firmenlogo"} icon={"sc-telegram"}/>
            </react_native_1.ImageBackground>
        </GrayColorImg_1.GrayColorImg>;
    };
    return ChallengeFullpage;
}(React.PureComponent));
exports.ChallengeFullpage = ChallengeFullpage;
//# sourceMappingURL=ChallengeFullpage.js.map