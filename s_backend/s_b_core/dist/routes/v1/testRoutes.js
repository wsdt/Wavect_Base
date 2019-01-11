"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("../../app");
app_1.default.app.route("/newsfeed")
    .get(function (_req, res) {
    console.log("DUCK");
    res.json([
        {
            postTitle: "Post 1",
            postDescr: "This is a description.",
            postMediaType: "p",
            postMediaUrl: "http://kevin.com/pic.jpg",
            uploadDatetime: "15.01.2018 14:30"
        },
        {
            postTitle: "Post 2",
            postDescr: "This is another description.",
            postMediaType: "v",
            postMediaUrl: "http://kevin.com/pic.mp4",
            uploadDatetime: "30.02.2019 10:00"
        }
    ]);
});
//# sourceMappingURL=testRoutes.js.map