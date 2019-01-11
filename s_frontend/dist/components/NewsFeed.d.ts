import * as React from "react";
import { Http2SSEclient } from "../Http2SSEclient";
import { IPropsPost } from "./Post";
export declare class NewsFeed extends React.Component<IPropsNewsfeed, IStateNewsfeed> {
    state: IStateNewsfeed;
    http2SSEclient: Http2SSEclient;
    constructor(props: IPropsNewsfeed);
    componentDidMount(): void;
    render(): JSX.Element[];
    private getCurrNewsfeed;
}
interface IStateNewsfeed {
    posts: IPropsPost[];
}
interface IPropsNewsfeed {
    userId: string;
}
export default NewsFeed;
