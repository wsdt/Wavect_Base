"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var cors = require("cors");
var express = require("express");
var helmet = require("helmet");
var morgan = require("morgan");
var http2 = require("spdy");
var app_constants_1 = require("./app.constants");
var routes = require("./routes/routes");
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
        this.app.use(cors({
            origin: app_constants_1.CLIENT_WEB
        }));
        this.app.use("/", routes);
        this.app.use(helmet());
        this.app.use(morgan("combined"));
        console.log("app: Configuration done.");
    };
    return App;
}());
exports.default = new App();
//# sourceMappingURL=app.js.map