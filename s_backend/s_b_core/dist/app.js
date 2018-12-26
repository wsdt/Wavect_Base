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
        var _this = this;
        var chatConversation = [];
        this.io.on('connection', function (client) {
            client.username = "Anonymous";
            console.log("New client connected: " + client.id);
            if (chatConversation.length > 0) {
                client.emit('prev_convo_available', chatConversation);
            }
            client.on('change_username', function (data) {
                var sysMsg = "Client " + client.username + " changed his name to " + data.username;
                console.log(sysMsg);
                client.username = data.username;
                chatConversation.push(sysMsg);
                _this.io.emit('new_uploaded_msg', sysMsg);
            });
            client.on('new_message', function (data) {
                var msg = client.username + ": " + data.message;
                chatConversation.push(msg);
                _this.io.emit('new_uploaded_msg', msg);
            });
            client.on('disconnect', function () {
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
