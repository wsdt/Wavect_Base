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
var GetStreamParent_1 = require("../components/stateful/GetStreamParent/GetStreamParent");
var BaseScreen_1 = require("./BaseScreen/BaseScreen");
var ProfileScreen = (function (_super) {
    __extends(ProfileScreen, _super);
    function ProfileScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProfileScreen.prototype.render = function () {
        return (<BaseScreen_1.BaseScreen>
                <GetStreamParent_1.GetStreamParent {...this.props} userId="ERROR"/>
            </BaseScreen_1.BaseScreen>);
    };
    return ProfileScreen;
}(React.Component));
exports.ProfileScreen = ProfileScreen;
//# sourceMappingURL=ProfileScreen.js.map