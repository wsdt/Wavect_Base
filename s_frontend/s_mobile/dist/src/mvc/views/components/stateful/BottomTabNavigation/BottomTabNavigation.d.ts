import * as React from "react";
import { IBottomTabNavigationState } from "./BottomTabNavigation.state";
declare class BottomTabNavigation extends React.PureComponent<any, IBottomTabNavigationState> {
    state: IBottomTabNavigationState;
    private openTab;
    render(): JSX.Element;
}
declare const _default: React.ComponentType<Pick<any, string | number | symbol> & {
    onRef?: ((instance: BottomTabNavigation | null) => void) | React.RefObject<BottomTabNavigation> | null | undefined;
}>;
export default _default;
