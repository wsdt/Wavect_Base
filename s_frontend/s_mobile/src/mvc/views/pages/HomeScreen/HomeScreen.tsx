import * as React from "react"
import {Challenge} from "../../../models/Challenge"
import {ChallengeCategory} from "../../../models/ChallengeCategory"
import {ChallengeFullpage} from "../../components/stateful/ChallengeFullpage/ChallengeFullpage"
import {BaseScreen} from "../BaseScreen/BaseScreen"

export class HomeScreen extends React.Component<any, any> {
    public render(): React.ReactNode {
        const challenge: Challenge = new Challenge(
            "Laugh2gether",
            "Bring einen Freund zum Lachen und mache ein Video.",
            {
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/1024px-Ikea_logo.svg.png",
            },
            ChallengeCategory.HEALTH,
            {
                uri: "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress",
            }
        )

        return (
            <BaseScreen>
                <ChallengeFullpage challenge={challenge}/>
            </BaseScreen>
        )
    }
}
