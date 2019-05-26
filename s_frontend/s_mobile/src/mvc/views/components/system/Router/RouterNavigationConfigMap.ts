import { NavigationRouteConfigMap } from "react-navigation"
import { HomeScreen } from "../../../pages/HomeScreen/HomeScreen"
import { routes } from "./Routes"

/**
 * Add here your routes as key-value pairs (if key == value, you can
 * use the shorthand by just writing the value).
 *
 * Keys are variables to avoid all sort of typing errors (aboves object should be used).
 */
export const routesConfig: NavigationRouteConfigMap = {
    [routes.HomeScreen]: {
        // key of route configuration
        navigationOptions: () => ({
            title: "Challenge", // which title to show in navbar
        }),
        screen: HomeScreen, // which component to load
    },
}
