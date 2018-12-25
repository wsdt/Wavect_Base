"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var App = (function () {
    function App() {
        this.app = express();
        this.config();
    }
    Object.defineProperty(App, "PORT", {
        get: function () {
            return 8090;
        },
        enumerable: true,
        configurable: true
    });
    App.prototype.runServer = function () {
        this.app.listen(App.PORT, function () {
            console.log("Express server listening on port " + App.PORT);
        });
    };
    App.prototype.config = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    };
    return App;
}());
exports.default = new App();
