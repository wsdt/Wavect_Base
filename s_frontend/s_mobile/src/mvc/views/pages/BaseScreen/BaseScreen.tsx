import * as React from "react"
import { View } from "react-native"
import styles from "./BaseScreen.css"
import BottomTabNavigation from "../../components/stateful/BottomTabNavigation/BottomTabNavigation"
import { ScrollView } from "react-navigation"

export const BaseScreen = (props: any): JSX.Element => {
    /* Pass all children as we want to have custom pages */
    // <SafeAreaView  forceInset={{ top: "always" }}> ==> might be needed in future (getstream, in general for unusual displays etc. (but warnings, input errors?)...
    return (
        <View style={styles.page}>
            <BottomTabNavigation>
                <ScrollView>{props.children}</ScrollView>
            </BottomTabNavigation>
        </View>
    )
}
