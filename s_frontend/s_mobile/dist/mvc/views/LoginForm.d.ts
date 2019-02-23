import * as React from "react";
export declare class LoginForm extends React.Component {
    state: {
        btnGroup: {
            selectedIndex: number;
        };
        pwdHidden: boolean;
    };
    render(): JSX.Element;
    private togglePwdVisibility;
    private onRegLoginPress;
    private onLoginBtnPress;
    private onRegisterBtnPress;
    private onPwdForgottenBtnPress;
}
