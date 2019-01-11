"use strict";
var express = require("express");
var newsfeedDeclaration_1 = require("../../../testRoutines/newsfeedDeclaration");
var router = express.Router();
router.route("/newsfeed/:userId").get(function (_req, res) {
    res.json(newsfeedDeclaration_1.users[0].posts);
});
module.exports = router;
//# sourceMappingURL=testing.js.map