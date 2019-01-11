"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(id, forename, surname, profilePicPath, followers, following, posts) {
        this._id = id;
        this._forename = forename;
        this._surname = surname;
        this._profilePicPath = profilePicPath;
        this._followers = followers;
        this._following = following;
        this._posts = posts;
    }
    Object.defineProperty(User.prototype, "posts", {
        get: function () {
            return this._posts;
        },
        enumerable: true,
        configurable: true
    });
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
    Object.defineProperty(User.prototype, "followers", {
        get: function () {
            return this._followers;
        },
        set: function (value) {
            this._followers = value;
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
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map