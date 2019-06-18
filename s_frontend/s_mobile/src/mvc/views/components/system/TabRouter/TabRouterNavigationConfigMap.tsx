import * as React from "react"
import {Icon} from "react-native-elements"
import { NavigationRouteConfigMap } from "react-navigation"
import { HomeScreen } from "../../../pages/HomeScreen/HomeScreen"
import {SettingsScreen} from "../../../pages/SettingsScreen/SettingsScreen"
import { tabRoutes } from "./TabRoutes"

/**
 * Add here your routes as key-value pairs (if key == value, you can
 * use the shorthand by just writing the value).
 *
 * Keys are variables to avoid all sort of typing errors (aboves object should be used).
 */
export const routesConfig: NavigationRouteConfigMap = {
    [tabRoutes.HomeScreen]: {
        screen: HomeScreen, // which component to load
        navigationOptions: {
            title: "Challenge",
            tabBarIcon: <Icon name="bell" type="font-awesome" />
        },
    },
    [tabRoutes.SettingsScreen]: {
      screen: SettingsScreen,
      navigationOptions: {
          title: "Settings",
          tabBarIcon: <Icon name="cog" type="font-awesome" />
      },
    },
}
