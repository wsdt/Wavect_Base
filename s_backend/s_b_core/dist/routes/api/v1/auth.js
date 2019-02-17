"use strict";
var express = require("express");
<<<<<<< HEAD
var router = express.Router();
=======
var GetStreamController_1 = require("../../../mvc/controllers/GetStreamController");
var router = express.Router();
router.route("/auth/:userId").get(function (req, res) {
    var userId = req.params.userId;
    res.json({ "token": GetStreamController_1.createUserToken(userId) });
});
>>>>>>> 266ca5303892defaabd5c85e28c665ef50898914
module.exports = router;
//# sourceMappingURL=auth.js.map