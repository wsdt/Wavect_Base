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
var stream = require("getstream");
var React = require("react");
var App_constants_1 = require("./App.constants");
var TEST_USER_ID = "kevin";
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._GETSTREAM = _this.connectToGetStream();
        return _this;
    }
    Object.defineProperty(App.prototype, "GETSTREAM", {
        get: function () {
            return this._GETSTREAM;
        },
        enumerable: true,
        configurable: true
    });
    App.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("h1", null, "Hello Be-Kind Team")));
    };
    App.prototype.connectToGetStream = function () {
        return fetch(App_constants_1.API_URL + "/auth/" + TEST_USER_ID)
            .then(function (res) { return res.json(); })
            .then(function (data) {
            return stream.connect(App_constants_1.GS_KEY, data.token, App_constants_1.GS_APP_ID);
        })
            .catch(function (err) {
            console.error("App:connectToGetStream: Could not connect to getStream!", err);
        });
    };
    return App;
}(React.Component));
exports.App = App;
//# sourceMappingURL=App.js.map