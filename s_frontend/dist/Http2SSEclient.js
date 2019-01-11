"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App_constants_1 = require("./components/App.constants");
var Http2SSEclient = (function () {
    function Http2SSEclient(sseChannel) {
        this.SSE_SOURCE = new EventSource(App_constants_1.SSE_URL + "/" + sseChannel);
        this.addDefaultEventHandlers();
    }
    Http2SSEclient.prototype.getSSE_SOURCE = function () { return this.SSE_SOURCE; };
    ;
    Http2SSEclient.prototype.addDefaultEventHandlers = function () {
        this.SSE_SOURCE.onerror = function (e) {
            console.error("Http2SSEClient: Could not establish connection with backend.\n" + JSON.stringify(e));
        };
        this.SSE_SOURCE.onopen = function (e) {
            console.log("Http2SSEClient: ServerSent-Events connection established: " + JSON.stringify(e));
        };
        this.SSE_SOURCE.onmessage = function (e) {
            console.log("Http2SSEClient: SSE-Data received -> " + e.data);
        };
    };
    return Http2SSEclient;
}());
exports.Http2SSEclient = Http2SSEclient;
//# sourceMappingURL=Http2SSEclient.js.map