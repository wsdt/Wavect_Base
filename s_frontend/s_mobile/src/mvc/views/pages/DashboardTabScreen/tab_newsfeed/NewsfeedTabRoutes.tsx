import * as React from "react"
import {Icon} from "react-native-elements"
import {createStackNavigator} from "react-navigation"
import p from "../../../../controllers/parseScss"
import * as styles from "../../../components/system/TabRouter/TabBar.scss"
import {routesStr} from "../DashboardTabScreen.constants"
import {NewsfeedTab} from "./NewsfeedTab"

/** Stack Navigator as tabs might have own routes, too */
export const NewsfeedTabRoutes = createStackNavigator({
    [routesStr.NewsfeedStack.Home]: {
        navigationOptions: {
            tabBarIcon: () => (
                <Icon name="list" type="material" iconStyle={p(styles.tabIcon)}/>
            ),
            tabBarLabel: "Newsfeed",
        },
        screen: NewsfeedTab,
    }
})