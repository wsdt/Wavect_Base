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
var RegistrationForm_1 = require("../components/stateful/RegistrationForm/RegistrationForm");
var BaseScreen_1 = require("./BaseScreen/BaseScreen");
var RegistrationScreen = (function (_super) {
    __extends(RegistrationScreen, _super);
    function RegistrationScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RegistrationScreen.prototype.render = function () {
        return (<BaseScreen_1.BaseScreen>
                <RegistrationForm_1.RegistrationForm {...this.props}/>
            </BaseScreen_1.BaseScreen>);
    };
    return RegistrationScreen;
}(React.Component));
exports.RegistrationScreen = RegistrationScreen;
//# sourceMappingURL=RegistrationScreen.js.map