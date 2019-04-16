import React, { Component } from "react";
import { IRegistrationFormState } from "./IRegistrationForm.state";
export declare class RegistrationForm extends Component<any, IRegistrationFormState> {
    state: {
        hidden: boolean;
        hiddenCheck: boolean;
    };
    private acceptableValues;
    render(): React.ReactNode;
    private renderForm;
    private isHiddenHandler;
    private isSubmittingHandler;
}
