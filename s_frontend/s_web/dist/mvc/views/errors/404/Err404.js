"use strict";
exports.__esModule = true;
var React = require("react");
require("../../../../scss/style.scss");
exports.ERR_404 = function (msg) {
    return React.createElement("div", { className: "pWarning" },
        React.createElement("h3", null, "Error 404"),
        React.createElement("p", null, msg));
};
