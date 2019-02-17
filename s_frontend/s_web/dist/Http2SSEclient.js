"use strict";
exports.__esModule = true;
var App_constants_1 = require("./mvc/views/App/App.constants");
/** Initializes server sent events on client side */
var Http2SSEclient = /** @class */ (function () {
    /**
     * @param sseChannel: As we use SSE_URL for referencing the backend-sse-service (e.g.: localhost/sse/v1)
     * we also want to subscribe to a specific channel (e.g. newsfeed) for receiving related events.
     */
    function Http2SSEclient(sseChannel) {
        this.SSE_SOURCE = new EventSource(App_constants_1.SSE_URL + "/" + sseChannel);
        this.addDefaultEventHandlers();
    }
    Http2SSEclient.prototype.getSSE_SOURCE = function () {
        return this.SSE_SOURCE;
    };
    /** Used to set default handlers (should only be executed by index-File once). */
    Http2SSEclient.prototype.addDefaultEventHandlers = function () {
        // On connection error show msg
        this.SSE_SOURCE.onerror = function (e) {
            console.error("Http2SSEClient: Could not establish connection with backend.\n" +
                JSON.stringify(e));
        };
        this.SSE_SOURCE.onopen = function (e) {
            console.log("Http2SSEClient: ServerSent-Events connection established: " +
                JSON.stringify(e));
        };
        this.SSE_SOURCE.onmessage = function (e) {
            console.log("Http2SSEClient: SSE-Data received -> " + e.data);
        };
    };
    return Http2SSEclient;
}());
exports.Http2SSEclient = Http2SSEclient;
