import * as React from "react"
import {Text, View} from "react-native"
import SplashScreen from "react-native-splash-screen"
import {ScrollView} from "react-navigation"
import {LoadingIndicator} from "../../components/functional/LoadingIndicator/LoadingIndicator"
import globalStyles from "../../GlobalStyles.css"
import styles from "./BaseScreen.css"
import {LoadingContext, LoadingStatus} from "./BaseScreen.hoc_context"
import {IBaseScreenState} from "./BaseScreen.state"

export class BaseScreen extends React.PureComponent<any, IBaseScreenState> {

    public state:IBaseScreenState = {
        loadingStatus: LoadingStatus.DONE,
    }

    public componentDidMount() {
        SplashScreen.hide()
    }

    public render() {
        return <LoadingContext.Provider value={this.setLoading}>
            <View style={styles.page}>
                {this.getLoadingStatusComponent()}
                <ScrollView style={this.getDisplayProp()} contentContainerStyle={globalStyles.scrollViewContainer}>{this.props.children}</ScrollView>
            </View>
        </LoadingContext.Provider>
    }

    private getLoadingStatusComponent = () => {
        switch (this.state.loadingStatus) {
            case LoadingStatus.LOADING: return <LoadingIndicator/>
            case LoadingStatus.ERROR: return <Text style={globalStyles.absoluteCenter}>Couldn't connect</Text>
            default: return null
        }
    }

    private setLoading = (isLoading: LoadingStatus): void => {
        this.setState({loadingStatus: isLoading})
    }

    private getDisplayProp = (): null | {} => {
        return (this.state.loadingStatus !== LoadingStatus.DONE ? {display: "none"} : null)
    }
}
