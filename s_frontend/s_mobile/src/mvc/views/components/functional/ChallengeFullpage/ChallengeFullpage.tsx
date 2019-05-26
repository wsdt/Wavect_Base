import * as React from "react"
import { ChallengeBackground } from "../../stateful/ChallengeBackground/ChallengeBackground"
import BottomChallengeBar from "../BottomChallengeBar/BottomChallengeBar"
import { IChallengeFullPageState } from "./ChallengeFullpage.state"


/** Try to always use PureComponent, as it might be better regarding performance! */

export class ChallengeFullpage extends React.PureComponent<
    any,
    IChallengeFullPageState
> {
    public state: IChallengeFullPageState = {
        backgroundImg: {
            uri:
                "https://images.pexels.com/photos/1116050/pexels-photo-1116050.jpeg?auto=compress&cs=tinysrgb",
        },
    }

    public render() {
        // TODO: Instead of nesting maybe try to set it as bg property to parent view (grayscale) or make an own component

        return <ChallengeBackground backgroundImg={this.state.backgroundImg}>
            <BottomChallengeBar
                headline={"Laugh2gether"}
                subline={
                    "Bring einen Freund zum Lachen und mache dabei ein Video"
                }
            />

        </ChallengeBackground>
    }
}
