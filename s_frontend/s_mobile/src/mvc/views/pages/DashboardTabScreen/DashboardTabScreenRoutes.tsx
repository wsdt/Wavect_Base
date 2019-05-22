import {NavigationRouteConfigMap} from "react-navigation"
import {routesStr} from "./DashboardTabScreen.constants"
import {ChallengeTabRoutes} from "./tab_challenges/ChallengeTabRoutes"
import {NewsfeedTabRoutes} from "./tab_newsfeed/NewsfeedTabRoutes"
import {ProfileTabRoutes} from "./tab_profile/ProfileTabRoutes"


export const routesObj: NavigationRouteConfigMap = {
    [routesStr.ChallengeStack.Home]: ChallengeTabRoutes,
    [routesStr.NewsfeedStack.Home]: NewsfeedTabRoutes,
    [routesStr.ProfileStack.Home]: ProfileTabRoutes,
}