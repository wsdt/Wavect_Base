import * as React from "react"
import { ChallengeFullpage } from "../../components/stateful/ChallengeFullpage/ChallengeFullpage"
import { BaseScreen } from "../BaseScreen/BaseScreen"

export class HomeScreen extends React.Component<any, any> {
    public render(): React.ReactNode {
        return (
            <BaseScreen>
                <ChallengeFullpage />
            </BaseScreen>
        )
    }
}
