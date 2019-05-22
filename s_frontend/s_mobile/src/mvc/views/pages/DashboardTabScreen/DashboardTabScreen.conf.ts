import {BottomTabNavigatorConfig, createAppContainer} from "react-navigation"
import {SwitchRouter} from "../../components/system/SwitchRouter/SwitchRouter"
import {DrawerNavigator} from "../../components/system/TabRouter/DrawerNavigator"
import * as styles from "../../components/system/TabRouter/TabBar.scss"
import {TestScreen} from "../TestScreen/TestScreen"
import {routesStr} from "./DashboardTabScreen.constants"
import {routesObj} from "./DashboardTabScreenRoutes"

const tabConf: BottomTabNavigatorConfig = {
    initialRouteName: routesStr.NewsfeedStack.Home,
    tabBarOptions: {
        iconStyle: styles.tabIcon,
        showIcon: true,
        tabStyle: styles.tabBarStyle,
    },
}

export const DashboardTabScreenContainer = createAppContainer(
    SwitchRouter(TestScreen, DrawerNavigator(routesObj, tabConf))
)