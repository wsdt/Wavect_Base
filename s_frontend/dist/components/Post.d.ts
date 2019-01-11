import * as React from "react";
import "../scss/newsfeed.scss";
export declare class Post extends React.Component<IProps_Post, any> {
    render(): JSX.Element;
}
export interface IProps_Post {
    upload_datetime: string;
    title: string;
    descr: string;
    media_type: string;
    media_url: string;
}
export default Post;
