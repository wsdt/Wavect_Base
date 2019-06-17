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
var Challenge_1 = require("../../../models/Challenge");
var ChallengeCategory_1 = require("../../../models/ChallengeCategory");
var BottomTabNavigation_1 = require("../../components/stateful/BottomTabNavigation/BottomTabNavigation");
var ChallengeFullpage_1 = require("../../components/stateful/ChallengeFullpage/ChallengeFullpage");
var BaseScreen_1 = require("../BaseScreen/BaseScreen");
var HomeScreen = (function (_super) {
    __extends(HomeScreen, _super);
    function HomeScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeScreen.prototype.render = function () {
        var challenge = new Challenge_1.Challenge("Laugh2gether", "Bring einen Freund zum Lachen und mache ein Video.", {
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/1024px-Ikea_logo.svg.png",
        }, ChallengeCategory_1.ChallengeCategory.HEALTH, {
            uri: "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress",
        });
        return (<BaseScreen_1.BaseScreen>
                <react_native_1.ScrollView>
                    <ChallengeFullpage_1.ChallengeFullpage challenge={challenge}/>
                </react_native_1.ScrollView>
                <BottomTabNavigation_1.BottomTabNavigation />
            </BaseScreen_1.BaseScreen>);
    };
    return HomeScreen;
}(React.Component));
exports.HomeScreen = HomeScreen;
//# sourceMappingURL=HomeScreen.js.map