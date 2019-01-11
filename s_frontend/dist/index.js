"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var App_1 = require("./components/App");
require("./scss/style.scss");
var ROOT = document.querySelector("#root");
ReactDOM.render(React.createElement(App_1.App, { name: "ExampleProperty" }), ROOT);
//# sourceMappingURL=index.js.map