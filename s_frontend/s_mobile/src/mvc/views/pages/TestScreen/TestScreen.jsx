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
var oAuthFacebook_1 = require("../../../models/oauth/childs/oAuthFacebook");
var TestFunctionalComponent_1 = require("../../components/functional/TestFunctionalComponent/TestFunctionalComponent");
var TestComponent_1 = require("../../components/stateful/TestComponent/TestComponent");
var BaseScreen_1 = require("../BaseScreen/BaseScreen");
var TestScreen = /** @class */ (function (_super) {
    __extends(TestScreen, _super);
    function TestScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestScreen.prototype.render = function () {
        return (<BaseScreen_1.BaseScreen>
                <TestComponent_1.TestComponent />
                <TestFunctionalComponent_1.TestFunctionalComponent authCallback={oAuthFacebook_1.OAuthFacebook.authenticate} socialType="facebook"/>
            </BaseScreen_1.BaseScreen>);
    };
    return TestScreen;
}(React.Component));
exports.TestScreen = TestScreen;
