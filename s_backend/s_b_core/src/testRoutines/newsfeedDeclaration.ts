/** Create testing procedure */
import {User} from "../routes/models/User";
import {Post} from "../routes/models/Post";

/** This file is meant only for pure testing */

export let users:User[] = [];
export let posts:Post[] = [];

posts.push(new Post("Post title 0 by user 0","Post descr","12.5.2018", "p","blaUrl"));
posts.push(new Post("Post title 1 by user 0","Post descr","25.5.2018", "p","blaUrl"));
posts.push(new Post("Post title 0 by user 2","Post descr","12.5.2018", "p","blaUrl"));
posts.push(new Post("Post title 0 by user 1","Post descr","12.5.2018", "p","blaUrl"));

users.push(new User("12e7-7d7s-jfjk-6e6d-8d8d-9999-0akEq","Kevin","Riedl","noPath",[users[1]],[users[2],users[1]],[posts[0],posts[1]]));
users.push(new User("1111-kkkkk-0000","Markus","Unteracher","noPath",[users[0],users[2]],[users[0]],[posts[3]]));
users.push(new User("3333-oooo-7777","Celina","Unterweger","noPath",[users[0]],[users[1]],[posts[2]]));