import * as React from "react"
import {View} from "react-native"
import SplashScreen from "react-native-splash-screen"
import styles from "./BaseScreen.css"

export class BaseScreen extends React.PureComponent<any, any> {

    public componentDidMount() {
        SplashScreen.hide()
    }

    public render() {
        /* Pass all children as we want to have custom pages */
        // <SafeAreaView  forceInset={{ top: "always" }}> ==> might be needed in future (getstream, in general for unusual displays etc. (but warnings, input errors?)...
        return <View style={styles.page}>{this.props.children}</View>
    }
}
