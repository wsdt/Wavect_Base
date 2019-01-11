/** User class */
import {Post} from "./Post";

export class User {
    private _id:string;
    private _forename:string;
    private _surname:string;
    private _profilePicPath:string;
    private _followers:User[];
    private _following:User[];
    private _posts:Post[];

    constructor(id:string, forename:string, surname:string, profilePicPath:string, followers:User[], following:User[], posts:Post[]) {
        this._id = id;
        this._forename = forename;
        this._surname = surname;
        this._profilePicPath = profilePicPath;
        this._followers = followers;
        this._following = following;
        this._posts = posts;
    }

    /** Used for newsfeed */
    get posts():Post[] {
        return this._posts;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }
    get forename(): string {
        return this._forename;
    }

    set forename(value: string) {
        this._forename = value;
    }
    get surname(): string {
        return this._surname;
    }

    set surname(value: string) {
        this._surname = value;
    }
    get following(): User[] {
        return this._following;
    }

    set following(value: User[]) {
        this._following = value;
    }
    get followers(): User[] {
        return this._followers;
    }

    set followers(value: User[]) {
        this._followers = value;
    }
    get profilePicPath(): string {
        return this._profilePicPath;
    }

    set profilePicPath(value: string) {
        this._profilePicPath = value;
    }
}