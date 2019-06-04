import * as React from "react"
import { ChallengeBackground } from "../../stateful/ChallengeBackground/ChallengeBackground"
import ChallengeLayerBar from "../ChallengeLayerBar/ChallengeLayerBar"
import { IChallengeFullPageState } from "./ChallengeFullpage.state"


/** Try to always use PureComponent, as it might be better regarding performance! */

export class ChallengeFullpage extends React.PureComponent<
    any,
    IChallengeFullPageState
> {
    public state: IChallengeFullPageState = {
        backgroundImg: {
            uri:
                "https://images.pexels.com/photos/1624059/pexels-photo-1624059.jpeg?cs=srgb&dl=afrikanisch-afro-am-telefon-1624059.jpg&fm=jpg",
        },
    }

    public render() {
        // TODO: Instead of nesting maybe try to set it as bg property to parent view (grayscale) or make an own component

        return <ChallengeBackground backgroundImg={this.state.backgroundImg}>
            <ChallengeLayerBar
                headline={"Laugh2gether"}
                subline={"Bring einen Freund zum Lachen und mache dabei ein Video"}
                company={"Firmenlogo"}
                /* icon={"sc-telegram"} */
            />

        </ChallengeBackground>
    }
}

