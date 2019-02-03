import * as React from "react"
import Cookies from "universal-cookie"
import DummyLogin from "../DummyLogin/DummyLogin"

// Cookie: https://github.com/reactivestack/cookies/tree/master/packages/universal-cookie
export const COOKIES:Cookies = new Cookies()

// <any, any> to set constraints we can set interfaces for props, states
export class App extends React.Component<any, any> {

    public render() {
        return (
            <React.Fragment>
                <h1>Hello Be-Kind Team</h1>

                <DummyLogin/>
            </React.Fragment>
        )
    }
}
