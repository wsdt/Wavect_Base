"use strict";
var express = require("express");
var router = express.Router();
router.use(function (_req, res, next) {
    res.header("Content-Type", "text/event-stream");
    res.header("Cache-Control", "no-cache");
    res.header("Connection", "keep-alive");
    next();
});
var newsfeed_1 = require("./v1/newsfeed");
router.use("/v1", newsfeed_1.v1Router);
router.use("*", function (_req, res) {
    res.send("ERROR: Something went wrong.");
});
module.exports = router;
//# sourceMappingURL=sseRoutes.js.map