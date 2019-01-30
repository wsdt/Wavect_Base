import * as React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as loginActions from "../../../redux/actions/login"
import "../../../scss/style.scss"


class DummyLogin extends React.Component<any, any> {

    public static mapStateToProps = (state:any, ownProps:any) => {
        console.log(JSON.stringify(state), JSON.stringify(ownProps))
        return {
            ownProps,
            userName: state.username
        }
    }

    public static mapDispatchToProps = (dispatch:any) => {
        return {actions: bindActionCreators(loginActions, dispatch)}
    }

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

    private handleSubmit = (e:React.FormEvent) => {
        this.props.actions.setCurrentUsername(this.state.login.username)
        e.preventDefault()
    }

    private handleChangeUsername = (e: any) => {
        this.setState({login: {username: e.target.value, password: this.state.login.password}})
    }

    private handleChangePassword = (e: any) => {
        this.setState({login: {username: this.state.login.username, password: e.target.value}})
    }
}

export default connect(DummyLogin.mapStateToProps, DummyLogin.mapDispatchToProps)(DummyLogin)