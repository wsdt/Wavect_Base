import * as React from "react"
import {ImageBackground} from "react-native"
import globalStyles from "../../../GlobalStyles.css"
import {ChallengeLayerBar} from "../../functional/ChallengeLayerBar/ChallengeLayerBar"
import {GrayColorImg} from "../../functional/GrayColorImg/GrayColorImg"
import styles from "./ChallengeFullpage.css"
import {IChallengeFullpageProps} from "./ChallengeFullpage.props"
import {IChallengeFullpageState} from "./ChallengeFullpage.state"

export class ChallengeFullpage extends React.PureComponent<IChallengeFullpageProps, IChallengeFullpageState> {
    public state:IChallengeFullpageState = {
        isGrayscale: true,
    }

    public render() {
        return <GrayColorImg isGrayscale={this.state.isGrayscale}>
            <ImageBackground
                source={this.props.backgroundImg}
                imageStyle={globalStyles.radius}
                style={styles.container}>
                <ChallengeLayerBar
                    headline={"Laugh2gether"}
                    subline={
                        "Bring einen Freund zum Lachen und mache dabei ein Video"
                    }
                    company={"Firmenlogo"}
                    icon={"sc-telegram"} />
            </ImageBackground>
        </GrayColorImg>
    }
}
