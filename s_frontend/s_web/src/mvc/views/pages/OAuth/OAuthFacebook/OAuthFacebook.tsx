import * as React from "react"
import ReactFacebookLogin from "react-facebook-login"

export class OAuthFacebook extends React.Component<any, any> {
    
    public render() {
        return <ReactFacebookLogin
            appId="385939391982964"
            callback={this.printRes}/>
    }
    private printRes = (res:any) => {
        console.log(JSON.stringify(res))
    }
}