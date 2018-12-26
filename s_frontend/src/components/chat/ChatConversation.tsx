import * as React from "react";
import {ChatMsg} from "./ChatMsg";

export class ChatConversation extends React.Component<any, any> {
    state = {conversation:[]};

    constructor(props:any) {
        super(props);
        this.props.socket.on('new_uploaded_msg',(newMsg:string) => {
            let tmpConv:string[] = this.state.conversation;
            tmpConv.push(newMsg);
            this.setState({conversation:tmpConv}); // override (best practice)
        });

        this.props.socket.on('prev_convo_available', (chatConvo:string[]) => {
            this.setState({conversation:chatConvo});
        });
    }

    public render() {
        return <div id="chatConversation">
            {this.state.conversation.map((msg, idx) => <ChatMsg key={idx} msg={msg}/>)}
        </div>;
    }
}