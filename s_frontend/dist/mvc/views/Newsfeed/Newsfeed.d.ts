import * as React from "react";
import "../../../../node_modules/react-activity-feed/dist/index.css";
import { INewsfeedState } from "./INewsfeedState";
declare class Newsfeed extends React.Component<any, INewsfeedState> {
    state: {
        userToken: string;
    };
    componentDidMount(): void;
    render(): JSX.Element;
    private queryUserToken;
}
export default Newsfeed;
