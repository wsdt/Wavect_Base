"use strict";
var express = require("express");
var Post_1 = require("../../models/Post");
var SSEvent_1 = require("../../models/SSEvent");
var router = express.Router();
router.route("/newsfeed/:userId").get(function (req, res) {
    setInterval(function () {
        var sse = new SSEvent_1.SSEvent("new_post", req.params.userId, JSON.stringify(new Post_1.Post("New post!", "descr of new post", "31.1.2019", "v", "noLink")));
        res.write(sse.toString());
    }, 4000);
});
module.exports = router;
//# sourceMappingURL=testing.js.map