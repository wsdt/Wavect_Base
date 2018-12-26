import * as React from "react";

export class ChatInput extends React.Component<any, any> {
    state = {chatInput:""};

    private handleChangeChatInput = (e:any) => {
        this.setState({chatInput: e.target.value});
    };

    private handleSubmitChatInput = () => {
        console.log("ChatInput:handleSubmitChatInput: Input->"+this.state.chatInput);
        this.props.socket.emit("new_message", {message: this.state.chatInput});
    };

    public render() {
        return <React.Fragment>
            <input type="text" id="chatInput" onChange={this.handleChangeChatInput}/>
            <input type="submit" value="Send" onClick={this.handleSubmitChatInput}/>
        </React.Fragment>;
    }
}