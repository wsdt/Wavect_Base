import * as React from "react"
import {Icon} from "react-native-elements"
import {NavigationRouteConfigMap} from "react-navigation"
import p from "../../../controllers/parseScss"
import * as styles from "../../components/system/TabRouter/TabBar.scss"
import {routesStr} from "./DashboardTabScreen.constants"
import {ChallengeTabRoutes} from "./tab_challenges/ChallengeTabRoutes"
import {NewsfeedTabRoutes} from "./tab_newsfeed/NewsfeedTabRoutes"
import {ProfileTabRoutes} from "./tab_profile/ProfileTabRoutes"


export const routesObj: NavigationRouteConfigMap = {
    [routesStr.ChallengeStack.Home]: {
        navigationOptions: {
            tabBarIcon: () => (
                <Icon name="lock" type="material" iconStyle={p(styles.tabIcon)}/>
            ),
            tabBarLabel: "Challenges",
        },
        screen: ChallengeTabRoutes,
    },
    [routesStr.NewsfeedStack.Home]: {
        navigationOptions: {
            tabBarIcon: () => (
                <Icon name="list" type="material" iconStyle={p(styles.tabIcon)}/>
            ),
            tabBarLabel: "Newsfeed",
        },
        screen: NewsfeedTabRoutes,
    },
    [routesStr.ProfileStack.Home]: {
        navigationOptions: {
            tabBarIcon: () => (
                <Icon name="accessibility" type="material" iconStyle={p(styles.tabIcon)}/>
            ),
            tabBarLabel: "Profile",
        },
        screen: ProfileTabRoutes,
    },
}