"use strict";
var express = require("express");
var Post_1 = require("../../models/Post");
var User_1 = require("../../models/User");
var sseEvents_constants_1 = require("../../sse/sseEvents.constants");
var newsfeed_1 = require("../../sse/v1/newsfeed");
var router = express.Router();
router.route("/newsfeed/:userId").get(function (req, res) {
    res.json(User_1.User.getUserById(req.params.userId).getPostsByFollowings());
});
router.route("/newsfeed/:userId").post(function (req, res) {
    var submittedPost = new Post_1.Post(req.body.title, req.body.descr, new Date().toDateString(), "p", "#", User_1.User.getUserById(req.params.userId));
    newsfeed_1.EE.emit(sseEvents_constants_1.E_NEW_POST, sseEvents_constants_1.E_NEW_POST, submittedPost);
    res.json({ error: false });
});
module.exports = router;
//# sourceMappingURL=newsfeed.js.map