import * as React from "react";
import * as loginActions from "../../../redux/actions/login";
import "../../../scss/style.scss";
declare class DummyLogin extends React.Component<any, any> {
    static mapStateToProps: (state: any, ownProps: any) => {
        ownProps: any;
        userName: any;
    };
    static mapDispatchToProps: (dispatch: any) => {
        actions: typeof loginActions;
    };
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
declare const _default: import("react-redux").ConnectedComponentClass<typeof DummyLogin, any>;
export default _default;
