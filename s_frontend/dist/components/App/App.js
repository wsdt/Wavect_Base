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
var Newsfeed_1 = require("../Newsfeed/Newsfeed");
var App_constants_1 = require("./App.constants");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { userToken: "" };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        this.queryUserToken();
    };
    App.prototype.render = function () {
        var newsfeedTsx = React.createElement("div", null, "Loading newsfeed ...");
        if (this.state.userToken) {
            newsfeedTsx = React.createElement(Newsfeed_1.Newsfeed, { userToken: this.state.userToken, userId: App_constants_1.TEST_USER_ID });
        }
        return (React.createElement(React.Fragment, null,
            React.createElement("h1", null, "Hello Be-Kind Team"),
            newsfeedTsx));
    };
    App.prototype.queryUserToken = function () {
        var _this = this;
        fetch(App_constants_1.API_URL + "/auth/" + App_constants_1.TEST_USER_ID)
            .then(function (res) { return res.json(); })
            .then(function (data) {
            _this.setState({ userToken: data.token });
        })
            .catch(function (err) {
            console.error("App:connectToGetStream: Could not connect to getStream!", err);
        });
    };
    return App;
}(React.Component));
exports.App = App;
//# sourceMappingURL=App.js.map