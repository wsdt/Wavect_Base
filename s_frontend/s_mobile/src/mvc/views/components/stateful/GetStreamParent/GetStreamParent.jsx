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
var react_native_1 = require("react-native");
var App_constants_1 = require("../../../../../../App.constants");
var LoadingIndicator_1 = require("../../functional/LoadingIndicator/LoadingIndicator");
var GetStreamParent_secrets_1 = require("./GetStreamParent.secrets");
var GetStreamParent = /** @class */ (function (_super) {
    __extends(GetStreamParent, _super);
    function GetStreamParent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { userToken: "" }; // TODO: Also to global (same with userId)
        _this.requestGetstreamToken = function (userId) {
            var TARGET_URI = App_constants_1.BACKEND_URL + "/api/v1/auth/" + userId;
            fetch(TARGET_URI)
                .then(function (res) { return res.json(); })
                .then(function (data) { return _this.setState({ userToken: data.token }); })
                .catch(function (e) {
                react_native_1.ToastAndroid.show("Could not connect to server.", react_native_1.ToastAndroid.SHORT);
                console.warn("URI: " + TARGET_URI + ", warning -> " + e.toString());
            });
        };
        _this.requestGetstreamToken(props.userId);
        return _this;
    }
    GetStreamParent.prototype.render = function () {
        console.log("User token: " + this.state.userToken + " // userId: " + this.props.userId);
        if (this.state.userToken !== "") {
            return <expo_activity_feed_1.StreamApp apiKey={GetStreamParent_secrets_1.GS_KEY} appId={GetStreamParent_secrets_1.GS_APP_ID} token={this.state.userToken}/>;
        }
        else {
            // Otherwise show loading indicator
            return <LoadingIndicator_1.LoadingIndicator />;
        }
    };
    return GetStreamParent;
}(React.Component));
exports.GetStreamParent = GetStreamParent;
