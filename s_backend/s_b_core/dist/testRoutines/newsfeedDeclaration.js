"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../routes/models/User");
var Post_1 = require("../routes/models/Post");
exports.users = [];
exports.posts = [];
exports.posts.push(new Post_1.Post("Post title 0 by user 0", "Post descr", "12.5.2018", "p", "blaUrl"));
exports.posts.push(new Post_1.Post("Post title 1 by user 0", "Post descr", "25.5.2018", "p", "blaUrl"));
exports.posts.push(new Post_1.Post("Post title 0 by user 2", "Post descr", "12.5.2018", "p", "blaUrl"));
exports.posts.push(new Post_1.Post("Post title 0 by user 1", "Post descr", "12.5.2018", "p", "blaUrl"));
exports.users.push(new User_1.User("12e7-7d7s-jfjk-6e6d-8d8d-9999-0akEq", "Kevin", "Riedl", "noPath", [exports.users[1]], [exports.users[2], exports.users[1]], [exports.posts[0], exports.posts[1]]));
exports.users.push(new User_1.User("1111-kkkkk-0000", "Markus", "Unteracher", "noPath", [exports.users[0], exports.users[2]], [exports.users[0]], [exports.posts[3]]));
exports.users.push(new User_1.User("3333-oooo-7777", "Celina", "Unterweger", "noPath", [exports.users[0]], [exports.users[1]], [exports.posts[2]]));
//# sourceMappingURL=newsfeedDeclaration.js.map