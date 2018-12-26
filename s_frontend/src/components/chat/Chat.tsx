import * as React from "react";
import {ChangeUsername} from "./ChangeUsername";
import * as io from 'socket.io-client';
import {ChatConversation} from "./ChatConversation";
import {ChatInput} from "./ChatInput";

export class Chat extends React.Component<any,any> {
    socket:any;

    constructor(props:any) {
        super(props);
        this.socket = io.connect("http://localhost:8090");
        console.log("Socket connected..");
    }

    public render() {
        return <React.Fragment>
                <ChangeUsername socket={this.socket}/>
                <ChatConversation socket={this.socket}/>
                <ChatInput socket={this.socket}/>
            </React.Fragment>;
    }
}