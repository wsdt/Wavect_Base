"use strict";
var express = require("express");
var router = express.Router();
router.route("/newsfeed/:userId")
    .get(function (req, res) {
    var userId = req.params.userId;
    res.json([
        {
            title: "Post 1 for " + userId,
            descr: "This is a description.",
            media_type: "p",
            media_url: "http://kevin.com/pic.jpg",
            upload_datetime: "15.01.2018 14:30"
        },
        {
            title: "Post 2 for " + userId,
            descr: "This is another description.",
            media_type: "v",
            media_url: "http://kevin.com/pic.mp4",
            upload_datetime: "30.02.2019 10:00"
        }
    ]);
});
module.exports = router;
//# sourceMappingURL=testing.js.map