import * as React from "react"
import {Icon} from "react-native-elements"
import {createStackNavigator} from "react-navigation"
import p from "../../../../controllers/parseScss"
import * as styles from "../../../components/system/TabRouter/TabBar.scss"
import {routesStr} from "../DashboardTabScreen.constants"
import {ChallengeTab} from "./ChallengeTab"

/** Stack Navigator as tabs might have own routes, too */
export const ChallengeTabRoutes = createStackNavigator({
    [routesStr.ChallengeStack.Home]: {
        navigationOptions: {
            tabBarIcon: () => (
                <Icon name="lock" type="material" iconStyle={p(styles.tabIcon)}/>
            ),
            tabBarLabel: "Challenges",
        },
        screen: ChallengeTab,
    }
})