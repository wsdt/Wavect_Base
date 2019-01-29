import {FormEvent} from "react"
import * as React from "react"
import "../../../scss/style.scss"


export class DummyLogin extends React.Component<any, any> {
    public state = {login: {username: "", password: ""}}

    public render() {
        return <form onSubmit={this.handleSubmit} className="formBlock">
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
        </form>
    }

    private handleSubmit = (e:FormEvent) => {

        e.preventDefault()
    }

    private handleChangeUsername = (e: any) => {
        this.setState({login: {username: e.target.value, password: this.state.login.password}})
    }

    private handleChangePassword = (e: any) => {
        this.setState({login: {username: this.state.login.username, password: e.target.value}})
    }
}