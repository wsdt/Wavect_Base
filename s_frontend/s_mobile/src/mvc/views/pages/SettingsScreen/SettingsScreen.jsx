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
var react_native_elements_1 = require("react-native-elements");
var React = require("react");
var BaseScreen_1 = require("../BaseScreen/BaseScreen");
var SettingsScreen = /** @class */ (function (_super) {
    __extends(SettingsScreen, _super);
    function SettingsScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SettingsScreen.prototype.render = function () {
        return (<BaseScreen_1.BaseScreen>
                <react_native_elements_1.Text>Wait</react_native_elements_1.Text>
            </BaseScreen_1.BaseScreen>);
    };
    return SettingsScreen;
}(React.Component));
exports.SettingsScreen = SettingsScreen;
