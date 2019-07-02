import * as React from "react"
import {NavRouter} from "../NavRouter/NavRouter";

// <any, any> to set constraints we can set interfaces for props, states
export class App extends React.Component<any, any> {
    public render() {
        return (
            <NavRouter/>
        )
    }
}
