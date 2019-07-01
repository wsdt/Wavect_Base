import * as React from "react"
import {View} from "react-native"
import {BACKEND_MOBILE_API} from "../../../../globalConfiguration/globalConfig"
import {Challenge} from "../../../models/Challenge"
import ChallengeFullpage from "../../components/stateful/ChallengeFullpage/ChallengeFullpage"
import {BaseScreen} from "../BaseScreen/BaseScreen"
import {LoadingStatus, withLoading} from "../BaseScreen/BaseScreen.hoc_context"
import {IHomeScreenState} from "./HomeScreen.state"

class HomeScreen extends React.Component<any, IHomeScreenState> {
    public state: IHomeScreenState = {
        challenge: undefined,
        loadingStatus: LoadingStatus.LOADING,
    }

    public componentDidMount(): void {
        this.fetchChallenge()
    }

    public render() {
        return (
            <BaseScreen>
                <View>{this.getChallengeComponent()}</View>
            </BaseScreen>
        )
    }

    private getChallengeComponent = () => {
        if (this.state.challenge) {
            return <ChallengeFullpage challenge={this.state.challenge}/>
        }
        return null
    }

    private fetchChallenge = () => {
        const setLoading = this.props.context
        console.log("##### c : "+JSON.stringify(setLoading))

        fetch(`${BACKEND_MOBILE_API}/challenge/current`)
            .then(res => res.json())
            .then(data => {
                this.setState({challenge: data.res as Challenge, loadingStatus: LoadingStatus.DONE})
                setLoading(LoadingStatus.DONE)
            })
            .catch(e => {
                console.error(e)
                this.setState({loadingStatus: LoadingStatus.ERROR})
                setLoading(LoadingStatus.ERROR)
            })
    }
}

export default withLoading(HomeScreen)