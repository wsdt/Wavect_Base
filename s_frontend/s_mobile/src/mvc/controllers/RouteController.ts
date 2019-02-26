import {createStackNavigator, NavigationRouteConfigMap, StackNavigatorConfig} from "react-navigation"
import {LoginScreen} from "../views/pages/LoginScreen"

/** You can define additional options for our router here */
const routerOptions:StackNavigatorConfig = {
    initialRouteName: "LoginScreen",
}

/**
 * Add here your routes as key-value pairs (if key == value, you can
 * use the shorthand by just writing the value).
 */
const routes:NavigationRouteConfigMap = {
    LoginScreen,
}


/**
 * This navigator is used by the root component to assign all routes to
 * our app.
 */
const AppNavigator = createStackNavigator(
    routes,
    routerOptions,
)

export default AppNavigator