import * as React from "react";
import "../../../../node_modules/react-activity-feed/dist/index.css";
import { INewsfeedState } from "./INewsfeedState";
declare class Newsfeed extends React.Component<any, INewsfeedState> {
    static mapStateToProps: (state: any, ownProps: any) => {
        ownProps: any;
        userName: any;
    };
    state: {
        userToken: string;
    };
    componentDidMount(): void;
    render(): JSX.Element;
    private queryUserToken;
}
declare const _default: import("react-redux").ConnectedComponentClass<typeof Newsfeed, any>;
export default _default;
