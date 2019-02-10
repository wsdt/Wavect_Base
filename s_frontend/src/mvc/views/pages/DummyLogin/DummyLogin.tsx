import * as React from "react"
import "../../../../scss/style.scss"
import {COOKIES} from "../../App/App"
import {API_URL} from "../../App/App.constants"
import {NAV_ROUTER as NavRouter} from "../../NavRouter/NavRouter"
import {COOKIE_ID_GS_USERTOKEN} from "./DummyLogin.constants"


// SIMPLE REDUX EXAMPLE: https://github.com/jasonmendes/simple-redux-example
// REACT-REDUX CONNECT EXPLAINED: https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/
class DummyLogin extends React.Component<any, any> {

    public state = {login: {username: "", password: ""}}

    public render() {
        const formFilledOut:boolean = (this.state.login.username !== "" && this.state.login.password !== "")
        let toRender: JSX.Element

        // If redux state (see mapStateToProps) is set then open userPage
        if (COOKIES.get(COOKIE_ID_GS_USERTOKEN)) { // only show if cookie valid and loggedIn status
            toRender = <NavRouter userName={this.state.login.username} userToken={COOKIES.get(COOKIE_ID_GS_USERTOKEN)}/>
        } else {
            toRender = (<form onSubmit={this.handleSubmit} className="formBlock">
                {!formFilledOut ? <p className="pWarning">Password and username required.</p> : "" }
                <div className="inputBlock">
                    <label htmlFor="login_username">Username</label><br />
                    <input type="text" onChange={this.handleChangeUsername} value={this.state.login.username}/>
                </div>
                <div className="inputBlock">
                    <label htmlFor="login_password">Password</label><br />
                    <input type="password" onChange={this.handleChangePassword} value={this.state.login.password}/>
                </div>
                <div className="inputBlock">
                    <input type="submit" value="Login" />
                </div>
            </form>)
        }

        return toRender
    }

    /** Queries userToken from backend, sets Cookie and forces rerender as we don't have a state change here. */
    private queryGSUserToken() {
        console.log("DummyLogin:queryGSUserToken: Trying to log user in now.")
        fetch(`${API_URL}/auth/${this.state.login.username}`)
            .then(res => res.json())
            .then(data => {
                console.log("DummyLogin:queryGSUserToken: GetStream token retrieved.")
                COOKIES.set(COOKIE_ID_GS_USERTOKEN, data.token, {path:"/", secure:true, maxAge:10})
                console.log("DummyLogin:queryGSUserToken: Cookies created.")
                this.forceUpdate()
                console.log("DummyLogin:queryGSUserToken: Have set cookie and queried, cached userToken from Getstream on React server -> "+data.token)
            })
            .catch(err => {
                console.error("App:connectToGetStream: Could not connect to getStream!", err)
            })

    }

    private handleSubmit = (e:React.FormEvent) => {
        this.queryGSUserToken()
        e.preventDefault()
    }

    private handleChangeUsername = (e: any) => {
        this.setState({login: {username: e.target.value, password: this.state.login.password}})
    }

    private handleChangePassword = (e: any) => {
        this.setState({login: {username: this.state.login.username, password: e.target.value}})
    }
}

export default DummyLogin