"use strict";
var express = require("express");
var app_constants_1 = require("../app.constants");
var router = express.Router();
router.use(function (_req, res, next) {
    res.header("Access-Control-Allow-Origin", app_constants_1.CLIENT_WEB);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var apiRoutes = require("./api/apiRoutes");
router.use('/api', apiRoutes);
var sseRoutes = require("./sse/sseRoutes");
router.use('/sse', sseRoutes);
module.exports = router;
//# sourceMappingURL=routes.js.map