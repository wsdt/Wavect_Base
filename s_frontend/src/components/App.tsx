import * as React from "react";

// <any, any> to set constraints we can set interfaces for props, states
export class App extends React.Component<IProps, any> {
  public render() {
    return (
      <React.Fragment>
        <h1>Hello Be-Kind Team</h1>
        <p>Param: {this.props.name}</p>
      </React.Fragment>
    );
  }
}

interface IProps {
  name: string;
}
