import * as React from "react";
import { IUser } from "../_general.interfaces/IUser";

class Profile extends React.Component<IUser, any> {
  public render() {
    // this.props.userToken
    return <p>{this.props.userName}</p>;
  }
}

export default Profile;
