import {
    createStackNavigator,
    NavigationRouteConfigMap,
    NavigationScreenOptions,
    StackNavigatorConfig,
} from "react-navigation"
import { LoginScreen } from "../views/pages/LoginScreen"
import { ProfileScreen } from "../views/pages/ProfileScreen"
import { RegistrationScreen } from "../views/pages/RegistrationScreen"

/**
 * You can provide custom navigationoptions for your nav bar for each page.
 * But if you don't provide any, then these default options are set.
 */
const defaultNavigationOptions: NavigationScreenOptions = {
    headerStyle: {
        backgroundColor: "#0055ee",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        fontWeight: "bold",
    },
}

/** You can define additional options for our router here */
const routerOptions: StackNavigatorConfig = {
    defaultNavigationOptions,
    initialRouteName: "LoginScreen", // Start page
    initialRouteParams: {},
}

/**
 * Add here your routes as key-value pairs (if key == value, you can
 * use the shorthand by just writing the value).
 */
const routes: NavigationRouteConfigMap = {
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: () => ({
            title: "Login",
        })
    },
    ProfileScreen: {
        screen: ProfileScreen,
        navigationOptions: () => ({
            title: "Profile",
        })
    },
    RegistrationScreen: {
        screen: RegistrationScreen,
        navigationOptions: () => ({
            title: "Registration"
        })
    },
}

/**
 * This navigator is used by the root component to assign all routes to
 * our app.
 */
const AppNavigator = createStackNavigator(routes, routerOptions)

export default AppNavigator
