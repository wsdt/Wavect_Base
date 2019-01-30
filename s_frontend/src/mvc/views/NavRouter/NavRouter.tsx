import * as React from "react"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import {unsetCurrentUsername} from "../../../redux/actions/login"
import store from "../../../redux/reduxStore"
import {HOME as Home} from "../Home/Home"
import {IMPRESSUM as Impressum} from "../Impressum/Impressum"

export const NAV_ROUTER = () => {
    const unsetSession = () => {store.dispatch(unsetCurrentUsername())}

    return <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/impressum">Impressum</Link>
                </li>
                <li onClick={unsetSession}>
                    <Link to="#">Logout</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/impressum" component={Impressum} />
        </div>
    </Router>
}
