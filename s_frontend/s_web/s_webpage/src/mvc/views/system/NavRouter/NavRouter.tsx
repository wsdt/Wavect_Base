import * as React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Home } from "../../pages/Home"
import { ERR_404 } from "../errors/404/Err404"

export const NavRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route component={ERR_404} />
            </Switch>
        </BrowserRouter>
    )
}
