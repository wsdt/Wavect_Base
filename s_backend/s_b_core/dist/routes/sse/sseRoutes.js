"use strict";
var express = require("express");
var router = express.Router();
router.use(function (_req, res, next) {
    res.header("Content-Type", "text/event-stream");
    res.header("Cache-Control", "no-cache");
    res.header("Connection", "keep-alive");
    next();
});
var v1SSE = require("./v1/testing");
router.use('/v1', v1SSE);
router.use('*', function (_req, res) {
    res.send("ERROR: Something went wrong.");
});
module.exports = router;
//# sourceMappingURL=sseRoutes.js.map