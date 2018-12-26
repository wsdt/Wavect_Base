import * as React from "react";

export class ChatMsg extends React.Component<any, any> {
    public render() {
        return <p className="chatMsg">{this.props.msg}</p>
    }
}