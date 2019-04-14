import * as React from "react";
import { IGetStreamParentProps } from "./IGetStreamParent.props";
import { IGetStreamParentState } from "./IGetStreamParent.state";
export declare class GetStreamParent extends React.Component<IGetStreamParentProps, IGetStreamParentState> {
    state: IGetStreamParentState;
    constructor(props: IGetStreamParentProps);
    render(): React.ReactNode;
    private requestGetstreamToken;
}
