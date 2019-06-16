import * as React from "react"
import { ChallengeFullpage } from "../../components/stateful/ChallengeBackground/ChallengeFullpage"
import { BaseScreen } from "../BaseScreen/BaseScreen"

export class HomeScreen extends React.Component<any, any> {
    public render(): React.ReactNode {
        return (
            <BaseScreen>
                <ChallengeFullpage
                    backgroundImg={{
                        uri: "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress",
                    }}
                />
            </BaseScreen>
        )
    }
}
