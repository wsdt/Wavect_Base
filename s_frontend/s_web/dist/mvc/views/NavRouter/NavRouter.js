"use strict";
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
exports.__esModule = true;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var App_1 = require("../App/App");
var Err404_1 = require("../errors/404/Err404");
var DummyLogin_constants_1 = require("../pages/DummyLogin/DummyLogin.constants");
var Home_1 = require("../pages/Home/Home");
var Impressum_1 = require("../pages/Impressum/Impressum");
var Profile_1 = require("../pages/Profile/Profile");
exports.NAV_ROUTER = function (props) {
    var unsetSession = function () {
        App_1.COOKIES.remove(DummyLogin_constants_1.COOKIE_ID_GS_USERTOKEN);
        location.reload();
    };
    return React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement("div", null,
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
                React.createElement("li", null,
                    React.createElement(react_router_dom_1.Link, { to: "/profile" }, "Profile")),
                React.createElement("li", null,
                    React.createElement(react_router_dom_1.Link, { to: "/impressum" }, "Impressum")),
                React.createElement("li", { onClick: unsetSession },
                    React.createElement(react_router_dom_1.Link, { to: "/" }, "Logout"))),
            React.createElement("hr", null),
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/", render: function () { return React.createElement(Home_1.HOME, __assign({}, props)); } }),
                React.createElement(react_router_dom_1.Route, { path: "/profile", render: function () { return React.createElement(Profile_1["default"], __assign({}, props)); } }),
                React.createElement(react_router_dom_1.Route, { path: "/impressum", component: Impressum_1.IMPRESSUM }),
                React.createElement(react_router_dom_1.Route, { component: Err404_1.ERR_404 }))));
};
