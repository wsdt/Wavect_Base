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
exports.__esModule = true;
var React = require("react");
var universal_cookie_1 = require("universal-cookie");
var DummyLogin_1 = require("../pages/DummyLogin/DummyLogin");
// Cookie: https://github.com/reactivestack/cookies/tree/master/packages/universal-cookie
exports.COOKIES = new universal_cookie_1["default"]();
// <any, any> to set constraints we can set interfaces for props, states
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("h1", null, "Hello Be-Kind Team"),
            React.createElement(DummyLogin_1["default"], null)));
    };
    return App;
}(React.Component));
exports.App = App;
