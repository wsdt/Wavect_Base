"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var PORT = 8090;
runServer();
function runServer() {
    app_1.default.listen(PORT, function () {
        console.log("Express server listening on port " + PORT);
    });
}
