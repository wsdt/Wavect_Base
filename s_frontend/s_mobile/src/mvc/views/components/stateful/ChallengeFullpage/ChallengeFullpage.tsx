import * as React from "react"
import { ImageBackground } from "react-native"
import globalStyles from "../../../GlobalStyles.css"
import { ChallengeLayerBar } from "../../functional/ChallengeLayerBar/ChallengeLayerBar"
import { GrayColorImg } from "../../functional/GrayColorImg/GrayColorImg"
import { LoadingIndicator } from "../../functional/LoadingIndicator/LoadingIndicator"
import styles from "./ChallengeFullpage.css"
import { IChallengeFullpageProps } from "./ChallengeFullpage.props"
import { IChallengeFullpageState } from "./ChallengeFullpage.state"

export class ChallengeFullpage extends React.PureComponent<IChallengeFullpageProps, IChallengeFullpageState> {
    public state: IChallengeFullpageState = {
        isGrayscale: true,
        isLoading: true,
    }

    public render() {
        const { bgImage } = this.props.challenge

        return (
            <GrayColorImg isGrayscale={this.state.isGrayscale}>
                <ImageBackground source={bgImage} imageStyle={globalStyles.radius} onLoad={this.onLoad} style={styles.container}>
                    {this.getInnerComponents()}
                </ImageBackground>
            </GrayColorImg>
        )
    }

    private getInnerComponents = (): React.ReactElement => {
        if (this.state.isLoading) {
            return <LoadingIndicator />
        }

        const { headline, subline, companyName, majorCategory } = this.props.challenge
        return <ChallengeLayerBar headline={headline} subline={subline} company={companyName} icon={majorCategory} />
    }

    private onLoad = () => {
        this.setState(prevState => ({
            ...prevState,
            isLoading: false,
        }))
    }
}
