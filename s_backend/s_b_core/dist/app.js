"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var routes = require("./routes/routes");
var http2 = require("spdy");
var helmet = require("helmet");
var app_constants_1 = require("./app.constants");
var App = (function () {
    function App() {
        this.app = express();
        this.server = http2.createServer(app_constants_1.HTTP2_OPTIONS, this.app);
        this.config();
    }
    App.prototype.runServer = function () {
        this.server.listen(app_constants_1.PORT, function (err) {
            if (err) {
                console.error(err);
                return process.exit(1);
            }
            else {
                console.log("App:runServer: Listening on port: " + app_constants_1.PORT);
            }
        });
    };
    App.prototype.config = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use("/", routes);
        this.app.use(helmet());
        console.log("app: Configuration done.");
    };
    return App;
}());
exports.default = new App();
//# sourceMappingURL=app.js.map