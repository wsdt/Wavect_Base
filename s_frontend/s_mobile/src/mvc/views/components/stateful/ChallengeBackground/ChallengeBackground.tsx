import * as React from "react"
import { ImageBackground, StyleProp, ViewStyle } from "react-native"
import styles from "./ChallengeBackground.css"
import { IChallengeBackgroundProps } from "./ChallengeBackground.props"

export class ChallengeBackground extends React.PureComponent<
    IChallengeBackgroundProps,
    any
> {
    public state = {
        isImageGrayscale: true,
    }

    public render() {
        return <ImageBackground imageStyle={this.getImageStyles()} style={styles.container}
                                source={this.props.backgroundImg}>
            {this.props.children}
        </ImageBackground>
    }

    private getImageStyles(): Array<StyleProp<ViewStyle>> {
        const imageStyles: any = [styles.bgImage]
        if (this.state.isImageGrayscale) {
            // imageStyles.push({tintColor:"gray"})
        }

        return imageStyles
    }
}
