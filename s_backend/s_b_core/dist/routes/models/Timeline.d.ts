import { User } from "./User";
import { Post } from "./Post";
export declare class Timeline {
    user: User;
    posts: Post[];
    constructor(user: User, posts: Post[]);
}
