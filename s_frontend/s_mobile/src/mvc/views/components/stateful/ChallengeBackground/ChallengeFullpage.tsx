import * as React from "react"
import {ImageBackground} from "react-native"
import globalStyles from "../../../GlobalStyles.css"
import {ChallengeLayerBar} from "../../functional/ChallengeLayerBar/ChallengeLayerBar"
import {GrayColorImg} from "../../functional/GrayColorImg/GrayColorImg"
import styles from "./ChallengeFullpage.css"
import {IChallengeFullpageProps} from "./ChallengeFullpage.props"
import {IChallengeFullpageState} from "./ChallengeFullpage.state"
import {LoadingIndicator} from "../../functional/LoadingIndicator/LoadingIndicator";

export class ChallengeFullpage extends React.PureComponent<IChallengeFullpageProps, IChallengeFullpageState> {
    public state: IChallengeFullpageState = {
        isGrayscale: true,
        isLoading: true,
    }

    public render() {
        return (
            <GrayColorImg isGrayscale={this.state.isGrayscale}>
                <ImageBackground
                    source={this.props.backgroundImg}
                    imageStyle={globalStyles.radius}
                    onLoad={this.onLoad}
                    style={styles.container}>
                    {this.getInnerComponents()}
                </ImageBackground>
            </GrayColorImg>
        )
    }

    private getInnerComponents = ():React.ReactElement => {
        if (this.state.isLoading) {
            return <LoadingIndicator />
        }

        return <ChallengeLayerBar
            headline={"Laugh2gether"}
            subline={"Bring einen Freund zum Lachen und mache dabei ein Video"}
            company={"Firmenlogo"}
            icon={"sc-telegram"} />
    }

    private onLoad = () => {
        this.setState(prevState => ({
            ...prevState,
            isLoading: false,
        }))
    }
}
