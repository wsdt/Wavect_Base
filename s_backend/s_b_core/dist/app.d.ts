/// <reference types="node" />
import * as express from "express";
import * as http from "http";
import * as http2 from "spdy";
declare class App {
    app: express.Application;
    http2Server: http2.Server;
    http1Server: http.Server;
    constructor();
    runServer(): void;
    private config;
}
declare const _default: App;
export default _default;
