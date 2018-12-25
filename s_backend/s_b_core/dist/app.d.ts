import * as express from "express";
declare class App {
    app: express.Application;
    static readonly PORT: number;
    constructor();
    runServer(): void;
    private config;
}
declare const _default: App;
export default _default;
