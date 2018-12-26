import * as React from "react";

export class ChangeUsername extends React.Component<any,any> {
    state = {newUsername:""};

    private handleChangeUsername = () => {
        this.props.socket.emit("change_username", {username: this.state.newUsername});
    };

    private handleChangeUsernameText = (e:any) => {
        this.setState({newUsername:e.target.value});
    };

    public render() {
        return <React.Fragment>
                <input type="text" id="changeUsernameText" onChange={this.handleChangeUsernameText}/>
                <input type="submit" value="Change username" onClick={this.handleChangeUsername}/>
            </React.Fragment>;
    }
}