import * as React from "react"
import { NavRouter } from "../../system/NavRouter/NavRouter"
import {TopNav} from "../TopNav/TopNav"

// <any, any> to set constraints we can set interfaces for props, states
export class App extends React.Component<any, any> {
    public render() {
        return <>
            <TopNav />
            <NavRouter />
            </>
    }
}
