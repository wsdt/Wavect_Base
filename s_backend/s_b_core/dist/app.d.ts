/// <reference types="node" />
import * as express from "express";
import * as http from "http";
import * as io from "socket.io";
declare class App {
    app: express.Application;
    server: http.Server;
    io: io.Server;
    static readonly PORT: number;
    constructor();
    runServer(): void;
    private config;
}
declare const _default: App;
export default _default;
