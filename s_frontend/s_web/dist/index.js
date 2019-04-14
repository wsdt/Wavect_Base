"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var react_redux_1 = require("react-redux");
var App_1 = require("./mvc/views/App/App");
var reduxStore_1 = require("./redux/reduxStore");
require("./scss/style.scss");
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: reduxStore_1.default },
    React.createElement(App_1.App, null)), document.getElementById("root"));
//# sourceMappingURL=index.js.map