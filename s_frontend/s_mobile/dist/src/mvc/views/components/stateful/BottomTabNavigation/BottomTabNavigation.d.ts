import * as React from "react";
import { IBottomTabNavigationState } from "./BottomTabNavigation.state";
export declare enum BottomTabs {
    TAB_CHALLENGE = "challenge",
    TAB_SETTINGS = "settings"
}
export declare class BottomTabNavigation extends React.PureComponent<any, IBottomTabNavigationState> {
    state: IBottomTabNavigationState;
    private openTab;
    render(): JSX.Element;
}
