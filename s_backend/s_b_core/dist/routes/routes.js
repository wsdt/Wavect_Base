"use strict";
var express = require("express");
var router = express.Router();
var apiRoutes = require("./api/apiRoutes");
router.use("/api", apiRoutes);
var sseRoutes = require("./sse/sseRoutes");
router.use("/sse", sseRoutes);
module.exports = router;
//# sourceMappingURL=routes.js.map