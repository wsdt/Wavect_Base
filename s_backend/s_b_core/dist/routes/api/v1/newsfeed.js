"use strict";
var express = require("express");
var newsfeedDeclaration_1 = require("../../../testRoutines/newsfeedDeclaration");
var Post_1 = require("../../models/Post");
var sseEvents_constants_1 = require("../../sse/sseEvents.constants");
var newsfeed_1 = require("../../sse/v1/newsfeed");
var router = express.Router();
router.route("/newsfeed/:userId").get(function (_req, res) {
    res.json(newsfeedDeclaration_1.users[0].posts);
});
router.route("/newsfeed").post(function (req, res) {
    var submittedPost = new Post_1.Post(req.body.title, req.body.descr, (new Date()).toDateString(), "p", "#");
    newsfeed_1.EE.emit(sseEvents_constants_1.E_NEW_POST, sseEvents_constants_1.E_NEW_POST, submittedPost);
    res.json({ error: false });
});
module.exports = router;
//# sourceMappingURL=newsfeed.js.map