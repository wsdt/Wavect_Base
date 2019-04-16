import { NavigationRouteConfigMap } from "react-navigation"
import { LoginScreen } from "../../../pages/LoginScreen"
import { ProfileScreen } from "../../../pages/ProfileScreen"
import { RegistrationScreen } from "../../../pages/RegistrationScreen"

/** Public routes mapping to avoid all sorts of spelling errors. */
export const routes = {
    LoginScreen: "LoginScreen",
    ProfileScreen: "ProfileScreen",
    RegistrationScreen: "RegistrationScreen",
}

/**
 * Add here your routes as key-value pairs (if key == value, you can
 * use the shorthand by just writing the value).
 *
 * Keys are variables to avoid all sort of typing errors (aboves object should be used).
 */
export const routesConfig: NavigationRouteConfigMap = {
    [routes.LoginScreen]: {
        // key of route configuration
        navigationOptions: () => ({
            title: "Login", // which title to show in navbar
        }),
        screen: LoginScreen, // which component to load
    },
    [routes.ProfileScreen]: {
        navigationOptions: () => ({
            title: "Profile",
        }),
        screen: ProfileScreen,
    },
    [routes.RegistrationScreen]: {
        navigationOptions: () => ({
            title: "Registration",
        }),
        screen: RegistrationScreen,
    },
}
