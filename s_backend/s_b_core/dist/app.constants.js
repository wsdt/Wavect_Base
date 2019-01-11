"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
exports.PORT = 8090;
exports.HTTP2_OPTIONS = {
    key: fs.readFileSync(path.resolve(__dirname, '..', 'secrets', 'server-key.pem')),
    cert: fs.readFileSync(path.resolve(__dirname, '..', 'secrets', 'server-cert.pem'))
};
exports.CLIENT_WEB = "http://localhost:8080";
//# sourceMappingURL=app.constants.js.map