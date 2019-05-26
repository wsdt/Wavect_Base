import * as React from "react"
import {ImageBackground} from "react-native"
import {LoadingIndicator} from "../../functional/LoadingIndicator/LoadingIndicator"
import * as styles from "./ChallengeFullpage.scss"
import {IChallengeFullPageState} from "./ChallengeFullpage.state"

/** Try to always use PureComponent, as it might be better regarding performance! */
export class ChallengeFullpage extends React.PureComponent<any, IChallengeFullPageState> {
    public state:IChallengeFullPageState = {
        backgroundImg: {uri: "https://www.dummyurl.com/jdjd.jpg"}, // uri or require dependent whether remote or local!
    }
    
    public componentWillMount(): void {
        this.setState({backgroundImg: require("LOCAL_RESOURCE_HERE")}) // TODO add local resource or load remote img from backend already
    }

    public render() {
        // TODO: Instead of nesting maybe try to set it as bg property to parent view (grayscale) or make an own component
        return this.getBackgroundImg()
    }

    /** Load bg image from backend server. TODO: In the meantime use local image */
    private getBackgroundImg(): React.ReactElement {
        return (this.state.backgroundImg) ? <LoadingIndicator/> :  <ImageBackground imageStyle={styles.bgImage} style={styles.container} source={this.state.backgroundImg}/>
    }
}