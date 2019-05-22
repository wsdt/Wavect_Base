import * as React from "react"
import {Icon} from "react-native-elements"
import {createStackNavigator} from "react-navigation"
import p from "../../../../controllers/parseScss"
import * as styles from "../../../components/system/TabRouter/TabBar.scss"
import {routesStr} from "../DashboardTabScreen.constants"
import {ProfileTab} from "./ProfileTab"

/** Stack Navigator as tabs might have own routes, too */
export const ProfileTabRoutes = createStackNavigator({
    [routesStr.ProfileStack]: {
        navigationOptions: {
            tabBarIcon: () => (
                <Icon name="accessibility" type="material" iconStyle={p(styles.tabIcon)}/>
            ),
            tabBarLabel: "Profile",
        },
        screen: ProfileTab,
    }
})