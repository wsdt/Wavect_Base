"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Post_1 = require("./Post");
var User = (function () {
    function User(id, forename, surname, profilePicPath, following) {
        this._id = id;
        this._forename = forename;
        this._surname = surname;
        this._profilePicPath = profilePicPath;
        this._following = following;
    }
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "forename", {
        get: function () {
            return this._forename;
        },
        set: function (value) {
            this._forename = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        set: function (value) {
            this._surname = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "following", {
        get: function () {
            return this._following;
        },
        set: function (value) {
            this._following = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "profilePicPath", {
        get: function () {
            return this._profilePicPath;
        },
        set: function (value) {
            this._profilePicPath = value;
        },
        enumerable: true,
        configurable: true
    });
    User.getUserById = function (id) {
        return new User(id, "Max", "Mustermann", "#", [
            new User("blaUser", "Katharina", "Summer", "#", [])
        ]);
    };
    User.prototype.getPosts = function () {
        return [
            new Post_1.Post("First post", "first descr", new Date().toDateString(), "p", "#", this.id),
            new Post_1.Post("Sec post", "descr", new Date().toISOString(), "p", "#", this.id),
            new Post_1.Post("Third post", "description", new Date().toLocaleString(), "p", "#", this.id)
        ];
    };
    User.prototype.getPostsByFollowings = function () {
        var posts = [];
        for (var _i = 0, _a = this.following; _i < _a.length; _i++) {
            var user = _a[_i];
            for (var _b = 0, _c = user.getPosts(); _b < _c.length; _b++) {
                var post = _c[_b];
                posts.push(post);
            }
        }
        return posts;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map