import * as React from "react"
import {BrowserRouter, Link, Route, Switch} from "react-router-dom"
import { ERR_404 } from "../errors/404/Err404"
import { Home } from "../pages/Home"

export const NavRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>

                <hr />

                <Switch>
                    <Route exact={true} path="/" component={Home} />
                    <Route component={ERR_404} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
