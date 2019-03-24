"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
exports.graphqlRoot = {
    hello: function () {
        return "Hello World";
    }
};
exports.graphqlSchema = graphql_1.buildSchema("\n        type Query {\n            hello: String\n        }\n    ");
//# sourceMappingURL=graphql_queries.js.map