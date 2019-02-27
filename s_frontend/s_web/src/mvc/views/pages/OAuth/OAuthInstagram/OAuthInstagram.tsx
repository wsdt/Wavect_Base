import * as React from "react";
import InstagramLogin from "react-instagram-login";

export class OAuthInstagram extends React.Component<any, any> {
  public render() {
    return (
      <InstagramLogin
        clientId="4e73bfb500a2415ab71a9d77d1e437f3"
        buttonText="Instagram Login"
        onSuccess={this.printRes}
        onFailure={this.printErr}
      />
    );
  }

  private printErr = (err: any) => {
    console.error(JSON.stringify(err));
  };

  private printRes = (res: any) => {
    console.log(JSON.stringify(res));
  };
}
