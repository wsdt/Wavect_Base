import * as React from "react"
import {NavigationScreenOptions} from "react-navigation"
import {RoundedButton} from "../../functional/RoundedButton/RoundedButton"

/**
 * You can provide custom navigationoptions for your nav bar for each page.
 * But if you don't provide any, then these default options are set.
 */
export const defaultNavigationOptions: NavigationScreenOptions = {
    headerRight: (
        <RoundedButton title="Feedback"/>
    ),
    headerStyle: {
        backgroundColor: "#fff",
    },
    headerTintColor: "#111" /* tintColor is used by title and back btn etc. */,
    headerTitleStyle: {
        fontWeight: "bold",
    },
}
