import * as React from "react"
import {ImageBackground, View} from "react-native"
import {GrayColorImg} from "../GrayColorImg/GrayColorImg"
import styles from "./ChallengeBackground.css"
import {IChallengeBackgroundProps} from "./ChallengeBackground.props"

export class ChallengeBackground extends React.PureComponent<IChallengeBackgroundProps,
    any> {
    public state = {
        isImageGrayscale: true,
    }

    public render() {
        return <GrayColorImg>
            <ImageBackground imageStyle={styles.bgImage} style={styles.container} source={this.props.backgroundImg}>
                {this.props.children}
            </ImageBackground></GrayColorImg>
    }
}
