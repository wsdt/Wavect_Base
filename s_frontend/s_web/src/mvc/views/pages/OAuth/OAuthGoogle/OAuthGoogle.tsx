import * as React from "react"
import {GoogleLogin} from "react-google-login"


export class OAuthGoogle extends React.Component<any, any> {

    public render() {
        return <GoogleLogin
            clientId=""
            buttonText="Google Login"
            onSuccess={this.printRes}
            onFailure={this.printErr}
        />
    }
    private printRes = (res:any) => {
        console.log(JSON.stringify(res))
    }

    private printErr = (err:any) => {
        console.error(JSON.stringify(err))
    }

}