import * as React from "react"

import { View } from "react-native"
import { BACKEND_MOBILE_API } from "../../../../globalConfiguration/globalConfig"
import { noInternetAvailable } from "../../../controllers/WarningsController"
import { Challenge } from "../../../models/Challenge"
import ChallengeFullpage from "../../components/stateful/ChallengeFullpage/ChallengeFullpage"
import { BaseScreen } from "../BaseScreen/BaseScreen"
import { IHomeScreenState } from "./HomeScreen.state"

export class HomeScreen extends React.Component<any, IHomeScreenState> {
    public state: IHomeScreenState = {
        challenge: undefined,
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
}
