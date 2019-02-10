import * as React from "react"
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import {COOKIES} from "../App/App"
import {ERR_404} from "../errors/404/Err404"
import {IUser} from "../pages/_general.interfaces/IUser"
import {COOKIE_ID_GS_USERTOKEN} from "../pages/DummyLogin/DummyLogin.constants"
import {HOME as Home} from "../pages/Home/Home"
import {IMPRESSUM as Impressum} from "../pages/Impressum/Impressum"
import Profile from "../pages/Profile/Profile"

export const NAV_ROUTER = (props:IUser) => {
    const unsetSession = () => {
        COOKIES.remove(COOKIE_ID_GS_USERTOKEN)
        location.reload()
    }

    return <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/impressum">Impressum</Link>
                </li>
                <li onClick={unsetSession}>
                    <Link to="#">Logout</Link>
                </li>
            </ul>

            <hr />

            <Switch>
                <Route exact path="/" render={() => <Home {...props}/>} />
                <Route path="/profile" render={() => <Profile {...props}/>} />
                <Route path="/impressum" component={Impressum} />
                <Route component={ERR_404} />
            </Switch>
        </div>
    </Router>
}
