import * as React from "react";
import "../../../scss/style.scss";
export declare class DummyLogin extends React.Component<any, any> {
    state: {
        login: {
            username: string;
            password: string;
        };
    };
    render(): JSX.Element;
    private handleSubmit;
    private handleChangeUsername;
    private handleChangePassword;
}
