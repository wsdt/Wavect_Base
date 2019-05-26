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
        elevation: 0,
        shadowOpacity: 0,
        shadowRadius: 0,
    },
    headerTintColor: "#111" /* tintColor is used by title and back btn etc. */,
    headerTitleStyle: {
        fontWeight: "bold",
    },
}

/* In case shadow is on IOS or Android still there
    shadowOffset: {
    height: 0,} */