import * as React from "react"

import ChallengeFullpage from "../../components/stateful/ChallengeFullpage/ChallengeFullpage"
import { BaseScreen } from "../BaseScreen/BaseScreen"
import { View } from "react-native"
import { Challenge } from "../../../models/Challenge"
import { noInternetAvailable } from "../../../controllers/WarningsController"
import { IHomeScreenState } from "./HomeScreen.state"
import { BACKEND_MOBILE_API } from "../../../../globalConfiguration/globalConfig"

export class HomeScreen extends React.Component<any, IHomeScreenState> {
    public state: IHomeScreenState = {
        challenge: undefined,
    }

    private fetchChallenge = () => {
        fetch(`${BACKEND_MOBILE_API}/challenge/current`)
            .then(res => res.json())
            .then(data => {
                this.setState({ challenge: data.res as Challenge })
            })
            .catch(e => {
                console.error(e)
                noInternetAvailable()
            })
    }

    public componentDidMount(): void {
        this.fetchChallenge()
    }

    public render() {
        return (
            <BaseScreen>
                <View>{this.state.challenge ? <ChallengeFullpage challenge={this.state.challenge} /> : null}</View>
            </BaseScreen>
        )
    }
}
