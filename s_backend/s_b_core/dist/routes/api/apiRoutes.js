"use strict";
var express = require("express");
var router = express.Router();
router.use(function (_req, res, next) {
    res.header("Content-Type", "application/json");
    next();
});
var mobileRoutes = require("./mobile/apiMobileRoutes");
router.use("/mobile", mobileRoutes);
router.use("*", function (_req, res) {
    res.json({ error: { msg: "Route not found.", err_code: 404 } });
});
module.exports = router;
//# sourceMappingURL=apiRoutes.js.map