import * as React from "react"
import {IUser} from "../_general.interfaces/IUser"


class Profile extends React.Component<IUser, any> {

    public render() {
        return <p>{this.props.userName} // {this.props.userToken}</p>
    }
}


export default Profile