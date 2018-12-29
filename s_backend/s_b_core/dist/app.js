"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var http = require("http");
var io = require("socket.io");
var App = (function () {
    function App() {
        this.server = http.createServer();
        this.io = io(this.server);
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
        this.io.on("connection", function (client) {
            console.log("New client connected: " + client.id);
            client.on("disconnect", function () {
                console.log("Client disconnected: " + client.id);
            });
        });
        this.io.listen(App.PORT);
        console.log("App:runServer: Listening on port: " + App.PORT);
    };
    App.prototype.config = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    };
    return App;
}());
exports.default = new App();
//# sourceMappingURL=app.js.map