"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
exports.USE_HTTPS = false;
exports.PORT = 8090;
exports.HTTP2_OPTIONS = {
    cert: fs.readFileSync(path.resolve(__dirname, "..", "secrets", "server-cert.pem")),
    key: fs.readFileSync(path.resolve(__dirname, "..", "secrets", "server-key.pem")),
};
exports.CLIENT_WEB = "https://localhost:8080";
exports.DATABASE_URI = "mongodb://192.168.99.100:27017/wavect";
//# sourceMappingURL=app.constants.js.map