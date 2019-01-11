"use strict";
var express = require("express");
var router = express.Router();
var v1Routes = require("./v1/testing");
router.use('/v1', v1Routes);
router.use('*', function (_req, res) {
    res.json({ error: { msg: "Route not found.", err_code: 404 } });
});
module.exports = router;
//# sourceMappingURL=apiRoutes.js.map