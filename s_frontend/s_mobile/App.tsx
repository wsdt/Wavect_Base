import * as React from "react"
import {createAppContainer} from "react-navigation"
import Router from "./src/mvc/controllers/RouteController"
import {RegistrationForm} from "./src/mvc/views/components/RegistForm/RegistrationForm";

/**
 * Just export the router component in an app container, to
 * make routes available to all pages.
 */
//export default createAppContainer(Router)
export default RegistrationForm
