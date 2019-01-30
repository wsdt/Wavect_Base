"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var login_1 = require("../../../redux/actions/login");
var reduxStore_1 = require("../../../redux/reduxStore");
var Home_1 = require("../Home/Home");
var Impressum_1 = require("../Impressum/Impressum");
exports.NAV_ROUTER = function () {
    var unsetSession = function () { reduxStore_1.default.dispatch(login_1.unsetCurrentUsername()); };
    return React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement("div", null,
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
                React.createElement("li", null,
                    React.createElement(react_router_dom_1.Link, { to: "/impressum" }, "Impressum")),
                React.createElement("li", { onClick: unsetSession },
                    React.createElement(react_router_dom_1.Link, { to: "#" }, "Logout"))),
            React.createElement("hr", null),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Home_1.HOME }),
            React.createElement(react_router_dom_1.Route, { path: "/impressum", component: Impressum_1.IMPRESSUM })));
};
//# sourceMappingURL=NavRouter.js.map