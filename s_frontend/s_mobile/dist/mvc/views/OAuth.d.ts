import * as React from "react";
export declare class OAuth extends React.Component {
    state: {
        loading: {
            "facebook": boolean;
            "github": boolean;
            "instagram": boolean;
            "linkedin": boolean;
            "twitter": boolean;
            "youtube": boolean;
        };
    };
    render(): JSX.Element;
    private onSocialBtnClick;
}
