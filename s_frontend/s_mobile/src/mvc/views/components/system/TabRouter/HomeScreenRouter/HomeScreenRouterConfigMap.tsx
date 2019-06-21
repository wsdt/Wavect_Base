import * as React from "react"
import { Icon } from "react-native-elements"
import { NavigationRouteConfigMap } from "react-navigation"
import { tabRoutes } from "./HomeRoutes"
import { HomeScreen } from "../../../../pages/HomeScreen/HomeScreen"
import SponsorFullpage from "../../../stateful/SponsorFullpage/SponsorFullpage"

export const routesConfig: NavigationRouteConfigMap = {
    [tabRoutes.HomeScreen]: {
        screen: HomeScreen, // which component to load
    },
    [tabRoutes.SponsorFullpage]: {
        screen: SponsorFullpage,
    },
}
