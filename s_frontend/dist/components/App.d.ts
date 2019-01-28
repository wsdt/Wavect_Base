import * as stream from "getstream";
import * as React from "react";
export declare class App extends React.Component<any, any> {
    readonly GETSTREAM: Promise<stream.Client | void>;
    private _GETSTREAM;
    render(): JSX.Element;
    private connectToGetStream;
}
