import * as React from "react";
import { ILoginFormState } from "./ILoginForm.state";
export declare class LoginForm extends React.Component<any, ILoginFormState> {
    state: ILoginFormState;
    render(): React.ReactNode;
    private renderForm;
    private togglePwdVisibility;
    private onLoginBtnPress;
    private onRegisterBtnPress;
    private onPwdForgottenBtnPress;
}
