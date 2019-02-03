import * as React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as loginActions from "../../../redux/actions/login"
import "../../../scss/style.scss"
import {NAV_ROUTER as NavRouter} from "../NavRouter/NavRouter"
import {COOKIES} from "../App/App"


// SIMPLE REDUX EXAMPLE: https://github.com/jasonmendes/simple-redux-example
// REACT-REDUX CONNECT EXPLAINED: https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/
class DummyLogin extends React.Component<any, any> {

    public static mapStateToProps = (state:any, ownProps:any) => {
        return {
            ownProps,
            userName: state.userName
        }
    }

    public static mapDispatchToProps = (dispatch:any) => {
        return {actions: bindActionCreators(loginActions, dispatch)}
    }

    public state = {login: {username: "", password: ""}}

    public render() {
        const formFilledOut:boolean = (this.state.login.username !== "" && this.state.login.password !== "")
        let toRender: JSX.Element

        // If redux state (see mapStateToProps) is set then open userPage
        if (this.props.userName && formFilledOut || COOKIES.get("AUTH")) {
            toRender = <NavRouter />
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

    private handleSubmit = (e:React.FormEvent) => {
        this.props.actions.setCurrentUsername(this.state.login.username)
        COOKIES.set("AUTH", this.state.login.username, {path:"/", secure:true, maxAge:10})
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