"use strict";
var express = require("express");
var GetStreamController_1 = require("../../../mvc/controllers/GetStreamController");
var router = express.Router();
router.route("/auth/:userId").get(function (req, res) {
    var userId = req.params.userId;
    res.json({ token: GetStreamController_1.createUserToken(userId) });
});
module.exports = router;
//# sourceMappingURL=auth.js.map