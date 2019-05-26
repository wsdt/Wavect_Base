import * as React from "react";
import { ChallengeBackground } from "../ChallengeBackground/ChallengeBackground"
import { IChallengeFullPageState } from "./ChallengeFullpage.state"

/** Try to always use PureComponent, as it might be better regarding performance! */
export class ChallengeFullpage extends React.PureComponent<
    any,
    IChallengeFullPageState
> {
    public render() {
        // TODO: Instead of nesting maybe try to set it as bg property to parent view (grayscale) or make an own component
        return <ChallengeBackground backgroundImg={this.state.backgroundImg} />
    }
}
