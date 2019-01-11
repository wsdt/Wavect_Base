
export class Post {
    upload_datetime:string;
    title:string;
    descr:string;
    media_type:string;
    media_url:string;
    //likedBy
    //comments etc.

    constructor(title:string, descr:string, upload_datetime:string, media_type:string, media_url:string) {
        this.title = title;
        this.descr = descr;
        this.upload_datetime = upload_datetime;
        this.media_type = media_type;
        this.media_url = media_url;
    }
}