"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var cors = require("cors");
var express = require("express");
var graphqlHTTP = require("express-graphql");
var helmet = require("helmet");
var morgan = require("morgan");
var app_constants_1 = require("./app.constants");
var graphql_queries_1 = require("./graphql/graphql_queries");
var routes = require("./routes/routes");
var http = require("http");
var http2 = require("spdy");
var db_1 = require("./db/db");
var App = (function () {
    function App() {
        this.app = express();
        this.http2Server = http2.createServer(app_constants_1.HTTP2_OPTIONS, this.app);
        this.http1Server = http.createServer(this.app);
        this.config();
    }
    App.prototype.runServer = function () {
        var server = app_constants_1.USE_HTTPS ? this.http2Server : this.http1Server;
        server.listen(app_constants_1.PORT, function (err) {
            if (err) {
                console.error(err);
                return process.exit(1);
            }
            else {
                console.log("App:runServer: Listening on port: " +
                    app_constants_1.PORT +
                    " using http2: " +
                    app_constants_1.USE_HTTPS);
            }
        });
    };
    App.prototype.config = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors({
            origin: app_constants_1.CLIENT_WEB,
        }));
        this.app.use("/graphql", graphqlHTTP({
            graphiql: true,
            rootValue: graphql_queries_1.graphqlRoot,
            schema: graphql_queries_1.graphqlSchema,
        }));
        db_1.connectToDb();
        this.app.use("/", routes);
        this.app.use(helmet());
        this.app.use(morgan("combined"));
        console.log("app: Configuration done.");
    };
    return App;
}());
exports.default = new App();
//# sourceMappingURL=app.js.map