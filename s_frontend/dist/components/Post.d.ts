import * as React from "react";
import "../scss/newsfeed.scss";
export declare class Post extends React.Component<IPropsPost, any> {
    render(): JSX.Element;
}
export interface IPropsPost {
    userName: string;
    uploadDatetime: string;
    title: string;
    descr: string;
    mediaType: string;
    mediaUrl: string;
}
export default Post;
