import { Component } from "react";
import { IRegistrationFormState } from "./IRegistrationForm.state";
export declare class RegistrationForm extends Component<any, IRegistrationFormState> {
    state: {
        hidden: boolean;
        hiddenCheck: boolean;
    };
    render(): JSX.Element;
    private renderForm;
    private isHiddenHandler;
    private isSubmittingHandler;
}
