"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var GetStreamController_1 = require("../mvc/controllers/GetStreamController");
exports.graphqlRoot = {
    getStreamToken: function (_a) {
        var userId = _a.userId;
        return GetStreamController_1.createUserToken(userId);
    },
};
exports.graphqlSchema = graphql_1.buildSchema("\n        type Query {\n            getStreamToken(userId: String!): String\n        }\n    ");
//# sourceMappingURL=graphql_queries.js.map