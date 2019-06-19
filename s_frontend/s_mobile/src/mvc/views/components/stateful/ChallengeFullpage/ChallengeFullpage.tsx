import * as React from "react"
import {ImageBackground} from "react-native"
import globalStyles from "../../../GlobalStyles.css"
import {ChallengeLayerBar} from "../../functional/ChallengeLayerBar/ChallengeLayerBar"
import {GrayColorImg} from "../../functional/GrayColorImg/GrayColorImg"
import {LoadingIndicator} from "../../functional/LoadingIndicator/LoadingIndicator"
import styles from "./ChallengeFullpage.css"
import {IChallengeFullpageProps} from "./ChallengeFullpage.props"
import {IChallengeFullpageState} from "./ChallengeFullpage.state"

export class ChallengeFullpage extends React.PureComponent<IChallengeFullpageProps, IChallengeFullpageState> {
    public state: IChallengeFullpageState = {
        isGrayscale: true,
        isLoading: true,
    }

    private testBackend = () => {
        // TODO: REMOVE ME ########################
        const url = "http://192.168.99.100:8090/api/mobile/v1/settings/00"
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(JSON.stringify(data)))
            .catch(e => console.error(e))
    }

    componentDidMount(): void {
        this.testBackend()
        // TODO remove
        console.log("executed ############")
    }


    public render() {
        const {bgImage} = this.props.challenge

        return (
            <GrayColorImg isGrayscale={this.state.isGrayscale}>
                <ImageBackground source={bgImage} imageStyle={globalStyles.radius} onLoad={this.onLoad}
                                 style={styles.container}>
                    {this.getInnerComponents()}
                </ImageBackground>
            </GrayColorImg>
        )
    }

    private getInnerComponents = (): React.ReactElement => {
        if (this.state.isLoading) {
            return <LoadingIndicator/>
        }

        const {headline, subline, companyLogoUri, majorCategory} = this.props.challenge
        return (
            <ChallengeLayerBar
                headline={headline}
                subline={subline}
                challengeCategoryUri={majorCategory}
                companyLogoUri={companyLogoUri}
                isGrayscale={this.state.isGrayscale}
            />
        )
    }

    private onLoad = () => {
        this.setState(prevState => ({
            ...prevState,
            isLoading: false,
        }))
    }
}
