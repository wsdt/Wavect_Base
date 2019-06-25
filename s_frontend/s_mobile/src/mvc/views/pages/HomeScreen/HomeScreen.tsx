import * as React from "react"
import { Challenge } from "../../../models/Challenge"
import { ChallengeCategory } from "../../../models/ChallengeCategory"
import ChallengeFullpage from "../../components/stateful/ChallengeFullpage/ChallengeFullpage"
import { BaseScreen } from "../BaseScreen/BaseScreen"
import { View } from "react-native"

export class HomeScreen extends React.Component<any, any> {
    public render(): React.ReactNode {
        const challenge: Challenge = new Challenge(
            "0",
            "Laugh2gether",
            "Bring einen Freund zum Lachen und mache ein Video.",
            "Wir und alle anderen finden Wavect einfach nur grandios!",
            {
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/1024px-Ikea_logo.svg.png",
            },
            ChallengeCategory.HEALTH,
            {
                uri: "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress",
            },
            30000
        )

        return (
            <BaseScreen>
                <View>
                    <ChallengeFullpage challenge={challenge} />
                </View>
            </BaseScreen>
        )
    }
}
