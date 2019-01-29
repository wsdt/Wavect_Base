"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var App_1 = require("./mvc/views/App/App");
var reducers_1 = require("./redux/reducers");
require("./scss/style.scss");
var store = redux_1.createStore(reducers_1.default);
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(App_1.App, null)), document.getElementById("#root"));
//# sourceMappingURL=index.js.map