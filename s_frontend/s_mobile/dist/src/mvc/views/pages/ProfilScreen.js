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
var styleBase = require("../../../scss/base.scss");
var parseScss_1 = require("../../../scss/parseScss");
var LoginForm_1 = require("../components/stateful/LoginForm/LoginForm");
var OAuth_1 = require("../components/stateful/OAuth/OAuth");
var ProfilScreen = (function (_super) {
    __extends(ProfilScreen, _super);
    function ProfilScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProfilScreen.prototype.render = function () {
        return (<react_native_1.View style={parseScss_1.default(styleBase.page)}>
                <react_native_1.View style={parseScss_1.default(styleBase.center)}>
                    <LoginForm_1.LoginForm {...this.props}/>
                    <OAuth_1.OAuth {...this.props}/>
                </react_native_1.View>
            </react_native_1.View>);
    };
    ProfilScreen.navigationOptions = {
        title: "Profile",
    };
    return ProfilScreen;
}(React.Component));
exports.ProfilScreen = ProfilScreen;
//# sourceMappingURL=ProfilScreen.js.map