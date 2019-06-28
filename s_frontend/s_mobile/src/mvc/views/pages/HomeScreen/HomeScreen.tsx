import * as React from "react"

import ChallengeFullpage from "../../components/stateful/ChallengeFullpage/ChallengeFullpage"
import { BaseScreen } from "../BaseScreen/BaseScreen"
import { View } from "react-native"
import { fetchChallenge } from "../../../controllers/challenge"

export class HomeScreen extends React.Component<any, any> {
    public render(): React.ReactNode {
        let currChallenge = fetchChallenge("/api/mobile/v1/challenge/current")

        console.log(currChallenge)

        return (
            <BaseScreen>
                <View>
                    <ChallengeFullpage challenge={currChallenge} />
                </View>
            </BaseScreen>
        )
    }
}
