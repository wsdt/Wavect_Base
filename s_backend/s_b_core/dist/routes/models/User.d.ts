import { Post } from "./Post";
export declare class User {
    private _id;
    private _forename;
    private _surname;
    private _profilePicPath;
    private _followers;
    private _following;
    private _posts;
    constructor(id: string, forename: string, surname: string, profilePicPath: string, followers: User[], following: User[], posts: Post[]);
    readonly posts: Post[];
    id: string;
    forename: string;
    surname: string;
    following: User[];
    followers: User[];
    profilePicPath: string;
}
