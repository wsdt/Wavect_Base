import { Post } from "./Post";
export declare class User {
    id: string;
    forename: string;
    surname: string;
    following: User[];
    profilePicPath: string;
    static getUserById(id: string): User;
    private _id;
    private _forename;
    private _surname;
    private _profilePicPath;
    private _following;
    constructor(id: string, forename: string, surname: string, profilePicPath: string, following: User[]);
    getPosts(): Post[];
    getPostsByFollowings(): Post[];
}
