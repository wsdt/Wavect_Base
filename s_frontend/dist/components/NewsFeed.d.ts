import * as React from "react";
import { IProps_Post } from "./Post";
import { Http2SSEclient } from "../Http2SSEclient";
export declare class NewsFeed extends React.Component<IProps_Newsfeed, IState_Newsfeed> {
    state: IState_Newsfeed;
    http2SSEclient: Http2SSEclient;
    constructor(props: IProps_Newsfeed);
    componentDidMount(): void;
    private getCurrNewsfeed;
    render(): JSX.Element[];
}
interface IState_Newsfeed {
    posts: IProps_Post[];
}
interface IProps_Newsfeed {
    userId: string;
}
export default NewsFeed;
