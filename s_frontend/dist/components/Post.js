"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("../scss/newsfeed.scss");
var Post = (function (_super) {
    __extends(Post, _super);
    function Post() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Post.prototype.render = function () {
        var mediaJsx = React.createElement("span", { className: "errorMsg" }, "Media couldn't be loaded.");
        switch (this.props.media_type) {
            case "p":
                mediaJsx = React.createElement("img", { src: this.props.media_url, alt: "post_pic" });
                break;
            case "v":
                mediaJsx = React.createElement("video", { width: "100", height: "100", controls: true },
                    React.createElement("source", { src: this.props.media_url, type: "video/mp4" }),
                    "Your browser does not support the video tag.");
                break;
        }
        return React.createElement("div", { className: "post_container" },
            React.createElement("span", { className: "post_uploaddatetime" }, this.props.upload_datetime),
            React.createElement("span", { className: "post_title" }, this.props.title),
            React.createElement("span", { className: "post_descr" }, this.props.descr),
            React.createElement("div", { className: "post_media" }, mediaJsx));
    };
    return Post;
}(React.Component));
exports.Post = Post;
exports.default = Post;
//# sourceMappingURL=Post.js.map