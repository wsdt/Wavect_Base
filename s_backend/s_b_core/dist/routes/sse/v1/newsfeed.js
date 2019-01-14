"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventEmitter = require("events");
var express = require("express");
var SSEvent_1 = require("../../models/SSEvent");
var sseEvents_constants_1 = require("../sseEvents.constants");
exports.v1Router = express.Router();
exports.EE = new EventEmitter();
exports.v1Router.route("/newsfeed/:userId").get(function (req, res) {
    exports.EE.on(sseEvents_constants_1.E_NEW_POST, function (e, post) {
        var sse = new SSEvent_1.SSEvent(String(e), req.params.userId, JSON.stringify(post));
        sse.sendSSEvent(res);
    });
});
//# sourceMappingURL=newsfeed.js.map