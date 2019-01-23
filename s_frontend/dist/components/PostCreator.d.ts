import * as React from "react";
export declare class PostCreator extends React.Component<IPropsPostCreator, any> {
    state: {
        title: string;
        descr: string;
    };
    render(): JSX.Element;
    private handleChangeTitle;
    private handleChangeDescr;
    private sendToApi;
}
interface IPropsPostCreator {
    userId: string;
}
export {};
