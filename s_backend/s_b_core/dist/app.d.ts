import * as express from "express";
import * as http2 from "spdy";
declare class App {
    app: express.Application;
    server: http2.Server;
    constructor();
    runServer(): void;
    private config;
}
declare const _default: App;
export default _default;
