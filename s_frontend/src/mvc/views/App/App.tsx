import * as React from "react"
import {DummyLogin} from "../DummyLogin/DummyLogin"

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
