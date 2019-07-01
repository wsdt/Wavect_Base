import * as React from "react"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import { ERR_404 } from "../errors/404/Err404"
import { Home } from "../pages/Home"

export const NAV_ROUTER = (props: any) => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>

                <hr />

                <Switch>
                    <Route exact={true} path="/" render={() => <Home {...props} />} />
                    <Route component={ERR_404} />
                </Switch>
            </div>
        </Router>
    )
}
