import * as React from "react"
import {ImageBackground} from "react-native"
import {GrayColorImg} from "../GrayColorImg/GrayColorImg"
import styles from "./ChallengeBackground.css"
import {IChallengeBackgroundProps} from "./ChallengeBackground.props"

export class ChallengeBackground extends React.PureComponent<IChallengeBackgroundProps,
    any> {
    public state = {
        isImageGrayscale: true,
    }

    public render() {
        return <ImageBackground
            imageStyle={[styles.bgImage, styles.backGreyImg]}
            style={styles.container}
            source={this.props.backgroundImg}>
            <ImageBackground source={this.props.backgroundImg}
                             imageStyle={styles.frontColorImg}
                             style={styles.container}>
                {this.props.children}
            </ImageBackground>
        </ImageBackground>
    }
}
