import { User } from "./User";
export declare class Post {
    uploadDatetime: string;
    title: string;
    descr: string;
    mediaType: string;
    mediaUrl: string;
    user: User;
    constructor(title: string, descr: string, uploadDatetime: string, mediaType: string, mediaUrl: string, user: User);
}
