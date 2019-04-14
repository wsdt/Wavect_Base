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
var GetStreamParent_1 = require("../components/stateful/GetStreamParent/GetStreamParent");
// <Header leftComponent={<BeKindIcon width={30} height={30} />} centerComponent={{text: "Authentication", style: {color: "#fff"}}} containerStyle={p(styleBase.header)}/>
var ProfileScreen = /** @class */ (function (_super) {
    __extends(ProfileScreen, _super);
    function ProfileScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProfileScreen.prototype.render = function () {
        /* Pass all props down to child component (e.g. navigation props! as screen is rendered)! */
        return (<react_native_1.View style={parseScss_1.default(styleBase.page)}>
                <react_native_1.View style={parseScss_1.default(styleBase.center)}>
                   <GetStreamParent_1.GetStreamParent {...this.props} userId="ERROR"/> 
                </react_native_1.View>
            </react_native_1.View>);
    };
    ProfileScreen.navigationOptions = {
        title: "Profile",
    };
    return ProfileScreen;
}(React.Component));
exports.ProfileScreen = ProfileScreen;