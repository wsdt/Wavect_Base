"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Newsfeed_1 = require("../Newsfeed/Newsfeed");
exports.HOME = function (props) {
    return React.createElement(React.Fragment, null,
        React.createElement("h2", null, "Home"),
        React.createElement(Newsfeed_1.default, { userName: props.userName, userToken: props.userToken }));
};
//# sourceMappingURL=Home.js.map