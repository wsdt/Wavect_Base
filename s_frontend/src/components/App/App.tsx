import * as React from "react"
import {Newsfeed} from "../Newsfeed/Newsfeed"
import {API_URL, TEST_USER_ID} from "./App.constants"


// <any, any> to set constraints we can set interfaces for props, states
export class App extends React.Component<any, any> {
    public state = {userToken: ""}

    public componentDidMount(): void {
        // setState only after mounting!
        this.queryUserToken()
    }

    public render() {
        let newsfeedTsx = <div>Loading newsfeed ...</div>
        // Only print Newsfeed if userToken is already available (otherwise multiple errors)
        if (this.state.userToken){
            newsfeedTsx = <Newsfeed userToken={this.state.userToken} userId={TEST_USER_ID}/>
        }

        return (
            <React.Fragment>
                <h1>Hello Be-Kind Team</h1>
                {newsfeedTsx}
            </React.Fragment>
        )
    }

    private queryUserToken() {
        fetch(`${API_URL}/auth/${TEST_USER_ID}`)
            .then(res => res.json())
            .then(data => {
                this.setState({userToken: data.token})
            })
            .catch(err => {
                console.error("App:connectToGetStream: Could not connect to getStream!", err)
            })
    }
}
