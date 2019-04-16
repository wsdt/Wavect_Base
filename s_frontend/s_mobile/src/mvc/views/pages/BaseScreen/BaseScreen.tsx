import * as React from "react"
import {SafeAreaView} from "react-navigation"
import p from "../../../../styling/parseScss"
import * as styles from "./BaseScreen.scss"

export const BaseScreen = (props: any) => {
    /* Pass all children as we want to have custom pages */
    return <SafeAreaView style={p(styles.page)} forceInset={{top: "always"}}>
            {props.children}
        </SafeAreaView>
}