import * as React from "react";
export declare class PostCreator extends React.Component<any, any> {
    state: {
        title: string;
        descr: string;
    };
    render(): JSX.Element;
    private handleChangeTitle;
    private handleChangeDescr;
    private sendToApi;
}
