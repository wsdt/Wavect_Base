"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var StringFunctions_1 = require("../helper/StringFunctions");
var PostCreator_1 = require("./PostCreator");
var LAZY_NEWS_FEED = React.lazy(function () { return Promise.resolve().then(function () { return require("./NewsFeed"); }); });
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { userId: StringFunctions_1.getRandomStr() };
        _this.handleUserId = function (e) {
            _this.setState({ userId: e.target.value });
        };
        return _this;
    }
    App.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("p", null,
                "Change userId:",
                React.createElement("input", { type: "text", onChange: this.handleUserId, value: this.state.userId })),
            React.createElement("h1", null, "Hello Be-Kind Team"),
            React.createElement(PostCreator_1.PostCreator, { userId: this.state.userId }),
            React.createElement(React.Suspense, { fallback: React.createElement("div", null, "Loading newsfeed ...") },
                React.createElement(LAZY_NEWS_FEED, { userId: this.state.userId, key: this.state.userId }))));
    };
    return App;
}(React.Component));
exports.App = App;
//# sourceMappingURL=App.js.map