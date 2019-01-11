"use strict";
var express = require("express");
var router = express.Router();
router.use(function (_req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var v1Routes = require("./routes/v1/testing");
router.use('/v1', v1Routes);
router.use('*', function (_req, res) {
    res.json({ error: { msg: "Route not found.", err_code: 404 } });
});
module.exports = router;
//# sourceMappingURL=routes.js.map