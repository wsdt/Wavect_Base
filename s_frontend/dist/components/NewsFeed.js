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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Http2SSEclient_1 = require("../Http2SSEclient");
var App_constants_1 = require("./App.constants");
var LAZY_POST = React.lazy(function () { return Promise.resolve().then(function () { return require("./Post"); }); });
var NewsFeed = (function (_super) {
    __extends(NewsFeed, _super);
    function NewsFeed(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { posts: [] };
        _this.http2SSEclient = new Http2SSEclient_1.Http2SSEclient("newsfeed/" + _this.props.userId);
        _this.getCurrNewsfeed = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                fetch(App_constants_1.API_URL + "/newsfeed/" + this.props.userId)
                    .then(function (res) { return res.json(); })
                    .then(function (resJson) {
                    _this.setState({ posts: resJson });
                })
                    .catch(function (err) {
                    console.error("getCurrNewsFeed: Fetch failed -> " + err);
                });
                return [2];
            });
        }); };
        _this.getCurrNewsfeed();
        return _this;
    }
    NewsFeed.prototype.componentDidMount = function () {
        var _this = this;
        this.http2SSEclient.getSSE_SOURCE().addEventListener("new_post", (function (e) {
            var newState = _this.state.posts;
            newState.push(JSON.parse(e.data));
            _this.setState({ posts: newState });
        }));
    };
    NewsFeed.prototype.render = function () {
        var newsFeedJsx = [];
        var posts = this.state.posts;
        console.log(posts);
        if (posts.length > 0) {
            for (var _i = 0, posts_1 = posts; _i < posts_1.length; _i++) {
                var post = posts_1[_i];
                var postKey = post.title + post.uploadDatetime;
                newsFeedJsx.push(React.createElement(React.Suspense, { fallback: React.createElement("div", null, "Loading ..."), key: postKey },
                    React.createElement(LAZY_POST, { key: postKey, title: post.title, descr: post.descr, mediaType: post.mediaType, mediaUrl: post.mediaUrl, uploadDatetime: post.uploadDatetime })));
            }
        }
        else {
            newsFeedJsx.push(React.createElement("p", { key: "no_posts_available" }, "You have no posts or data is being fetched."));
        }
        return newsFeedJsx;
    };
    return NewsFeed;
}(React.Component));
exports.NewsFeed = NewsFeed;
exports.default = NewsFeed;
//# sourceMappingURL=NewsFeed.js.map