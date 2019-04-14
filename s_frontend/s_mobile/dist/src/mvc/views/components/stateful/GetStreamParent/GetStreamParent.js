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
var expo_activity_feed_1 = require("expo-activity-feed");
var React = require("react");
var react_navigation_1 = require("react-navigation");
var App_constants_1 = require("../../../../../../App.constants");
var GetStreamParent_secrets_1 = require("./GetStreamParent.secrets");
var GetStreamParent = (function (_super) {
    __extends(GetStreamParent, _super);
    function GetStreamParent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { userToken: "" };
        _this.requestGetstreamToken = function (userId) {
            fetch(App_constants_1.BACKEND_URL + "/api/v1/auth/" + userId)
                .then(function (res) { return res.json(); })
                .then(function (data) { return _this.setState({ userToken: data.token }); });
        };
        _this.requestGetstreamToken(props.userId);
        return _this;
    }
    GetStreamParent.prototype.render = function () {
        return (<react_navigation_1.SafeAreaView style={{ flex: 1 }} forceInset={{ top: "always" }}>
                <expo_activity_feed_1.StreamApp apiKey={GetStreamParent_secrets_1.GS_API_KEY} appId={GetStreamParent_secrets_1.GS_APP_ID} token={this.state.userToken}/>
            </react_navigation_1.SafeAreaView>);
    };
    return GetStreamParent;
}(React.Component));
exports.GetStreamParent = GetStreamParent;
//# sourceMappingURL=GetStreamParent.js.map