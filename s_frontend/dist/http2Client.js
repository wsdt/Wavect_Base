"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http2 = require("http2");
var fs = require("fs");
var client = http2.connect("https://localhost:8090", {
    ca: fs.readFileSync("client-cert.pem")
});
client.on("error", function (err) { return console.error("Could not connect to server -> " + JSON.stringify(err)); });
//# sourceMappingURL=http2Client.js.map