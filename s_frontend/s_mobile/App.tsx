import * as React from "react"
import {createAppContainer} from "react-navigation"
import Router from "./src/mvc/controllers/RouteController"

/**
 * Just export the router component in an app container, to
 * make routes available to all pages.
 */
export default createAppContainer(Router)
