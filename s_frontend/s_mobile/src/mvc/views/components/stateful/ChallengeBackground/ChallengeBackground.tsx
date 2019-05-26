import * as React from "react"
import { ImageBackground, StyleProp, ViewStyle } from "react-native"
import p from "../../../../controllers/parseScss"
import { IChallengeBackgroundProps } from "./ChallengeBackground.props"
import * as styles from "./ChallengeBackground.scss"

export class ChallengeBackground extends React.PureComponent<
    IChallengeBackgroundProps,
    any
> {
    public state = {
        isImageGrayscale: true,
    }

    private getImageStyles(): Array<StyleProp<ViewStyle>> {
        const imageStyles: any = [p(styles.bgImage)]
        if (this.state.isImageGrayscale) {
            //imageStyles.push({tintColor:"gray"})
        }

        return imageStyles
    }

    public render() {
        return (
            <ImageBackground
                imageStyle={this.getImageStyles()}
                style={p(styles.container)}
                source={this.props.backgroundImg}
            />
        )
    }
}
