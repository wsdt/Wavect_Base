"use strict";
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
var App_1 = require("./App");
it("renders without crashing", function () {
    var div = document.createElement("div");
    ReactDOM.render(React.createElement(App_1.App, null), div);
    ReactDOM.unmountComponentAtNode(div);
});
