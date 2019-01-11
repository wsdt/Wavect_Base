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
var LAZY_NEWS_FEED = React.lazy(function () { return Promise.resolve().then(function () { return require("./NewsFeed"); }); });
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("h1", null, "Hello Be-Kind Team"),
            React.createElement(React.Suspense, { fallback: React.createElement("div", null, "Loading newsfeed ...") },
                React.createElement(LAZY_NEWS_FEED, { userId: "12e7-7d7s-jfjk-6e6d-8d8d-9999-0akEq" }))));
    };
    return App;
}(React.Component));
exports.App = App;
//# sourceMappingURL=App.js.map