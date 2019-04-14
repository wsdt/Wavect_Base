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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_activity_feed_1 = require("react-activity-feed");
require("../../../../../node_modules/react-activity-feed/dist/index.css");
var Newsfeed_constants_1 = require("./Newsfeed.constants");
var Newsfeed = (function (_super) {
    __extends(Newsfeed, _super);
    function Newsfeed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Newsfeed.prototype.render = function () {
        console.log(JSON.stringify(this.props));
        return (React.createElement(react_activity_feed_1.StreamApp, { apiKey: Newsfeed_constants_1.GS_KEY, appId: Newsfeed_constants_1.GS_APP_ID, token: this.props.userToken },
            React.createElement(react_activity_feed_1.NotificationDropdown, { notify: true }),
            React.createElement(react_activity_feed_1.StatusUpdateForm, { feedGroup: "timeline", userId: this.props.userName }),
            React.createElement(react_activity_feed_1.FlatFeed, { options: { reactions: { recent: true } }, Paginator: react_activity_feed_1.InfiniteScrollPaginator, notify: true, Activity: function (props) { return (React.createElement(react_activity_feed_1.Activity, __assign({}, props, { Footer: function () { return (React.createElement("div", { style: { padding: "8px 16px" } },
                        React.createElement(react_activity_feed_1.LikeButton, __assign({}, props)),
                        React.createElement(react_activity_feed_1.CommentField, { activity: props.activity, onAddReaction: props.onAddReaction }),
                        React.createElement(react_activity_feed_1.CommentList, { activityId: props.activity.id }))); } }))); } })));
    };
    return Newsfeed;
}(React.Component));
exports.default = Newsfeed;
//# sourceMappingURL=Newsfeed.js.map