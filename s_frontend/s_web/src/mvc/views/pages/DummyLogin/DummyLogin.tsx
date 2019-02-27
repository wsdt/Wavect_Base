import * as React from "react";
import "../../../../scss/style.scss";
import { COOKIES } from "../../App/App";
import { API_URL } from "../../App/App.constants";
import { NAV_ROUTER as NavRouter } from "../../NavRouter/NavRouter";
import { OAuthFacebook } from "../OAuth/OAuthFacebook/OAuthFacebook";
import { OAuthInstagram } from "../OAuth/OAuthInstagram/OAuthInstagram";
import {
  COOKIE_ID_GS_USERTOKEN,
  COOKIE_ID_USERID
} from "./DummyLogin.constants";

// SIMPLE REDUX EXAMPLE: https://github.com/jasonmendes/simple-redux-example
// REACT-REDUX CONNECT EXPLAINED: https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/
class DummyLogin extends React.Component<any, any> {
  public render() {
    let toRender: JSX.Element;

    // If redux state (see mapStateToProps) is set then open userPage
    if (COOKIES.get(COOKIE_ID_GS_USERTOKEN) && COOKIES.get(COOKIE_ID_USERID)) {
      // only show if cookie valid and loggedIn status
      toRender = (
        <NavRouter
          userName={COOKIES.get(COOKIE_ID_USERID)}
          userToken={COOKIES.get(COOKIE_ID_GS_USERTOKEN)}
        />
      );
    } else {
      toRender = (
        <React.Fragment>
          <OAuthFacebook />
          <OAuthInstagram />
        </React.Fragment>
      );
    }

    return toRender;
  }

  /** Queries userToken from backend, sets Cookie and forces rerender as we don't have a state change here. */
  private queryGSUserToken() {
    console.log("DummyLogin:queryGSUserToken: Trying to log user in now.");
    fetch(`${API_URL}/auth/${this.state.login.username}`)
      .then(res => res.json())
      .then(data => {
        console.log("DummyLogin:queryGSUserToken: GetStream token retrieved.");
        COOKIES.set(COOKIE_ID_GS_USERTOKEN, data.token, {
          path: "/",
          secure: true,
          maxAge: 3000
        });
        COOKIES.set(COOKIE_ID_USERID, this.state.login.username, {
          path: "/",
          secure: true,
          maxAge: 3000
        });
        console.log("DummyLogin:queryGSUserToken: Cookies created.");
        this.forceUpdate();
        console.log(
          "DummyLogin:queryGSUserToken: Have set cookie and queried, cached userToken from Getstream on React server -> " +
            data.token
        );
      })
      .catch(err => {
        console.error(
          "App:connectToGetStream: Could not connect to getStream!",
          err
        );
      });
  }

  private handleSubmit = (e: React.FormEvent) => {
    this.queryGSUserToken();
    e.preventDefault();
  };

  private handleChangeUsername = (e: any) => {
    this.setState({
      login: { username: e.target.value, password: this.state.login.password }
    });
  };

  private handleChangePassword = (e: any) => {
    this.setState({
      login: { username: this.state.login.username, password: e.target.value }
    });
  };
}

export default DummyLogin;
