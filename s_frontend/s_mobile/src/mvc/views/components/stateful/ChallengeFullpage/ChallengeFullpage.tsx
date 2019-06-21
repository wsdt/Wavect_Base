import * as React from "react"
import { ImageBackground, View } from "react-native"
import globalStyles from "../../../GlobalStyles.css"
import { ChallengeLayerBar } from "../ChallengeLayerBar/ChallengeLayerBar"
import { GrayColorImg } from "../../functional/GrayColorImg/GrayColorImg"
import { LoadingIndicator } from "../../functional/LoadingIndicator/LoadingIndicator"
import styles from "./ChallengeFullpage.css"
import { IChallengeFullpageProps } from "./ChallengeFullpage.props"
import { IChallengeFullpageState } from "./ChallengeFullpage.state"
import { CompanyLogo } from "../../functional/CompanyLogo/CompanyLogo"
import { ChallengeTypeIcon } from "../../functional/ChallengeTypeIcon/ChallengeTypeIcon"
<<<<<<< HEAD
import { functionalityNotAvailable } from "../../../../controllers/WarningsController"
=======
import SponsorFullpage from "../SponsorFullpage/SponsorFullpage";
>>>>>>> 13bbcae5f7ad567168c06df63859a2c83225f5f7

export class ChallengeFullpage extends React.PureComponent<IChallengeFullpageProps, IChallengeFullpageState> {
    public state: IChallengeFullpageState = {
        isGrayscale: true,
        isLoading: true,
<<<<<<< HEAD
=======
        isSponsorPressed: false
>>>>>>> 13bbcae5f7ad567168c06df63859a2c83225f5f7
    }

    public render() {
        const { bgImage } = this.props.challenge

        if (this.state.isSponsorPressed) {
            return (
            <SponsorFullpage
                sponsorName={"IKEA"}
                shortDescr={"Wir von IKEA sind sind große Eierbauern und interessieren uns sehr für mittel und großbusige Damen. Ruf uns an"}
                logoUri={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/1024px-Ikea_logo.svg.png"}

            />
            )
        }else{
            return (
                <GrayColorImg isGrayscale={this.state.isGrayscale}>
                    <ImageBackground source={bgImage} imageStyle={globalStyles.radius} onLoad={this.onLoad} style={styles.container}>
                        {this.getChallengeView()}
                    </ImageBackground>
                </GrayColorImg>
            )
        }
    }

    private getChallengeView = (): React.ReactElement => {
        if (this.state.isLoading) {
            return <LoadingIndicator />
        }

<<<<<<< HEAD
        const { id, headline, subline, companyLogoUri, majorCategory, expirationInMs } = this.props.challenge
=======
        const { headline, subline, companyLogoUri, majorCategory, expirationInMs } = this.props.challenge;
>>>>>>> 13bbcae5f7ad567168c06df63859a2c83225f5f7

        return (
            <>
                <View style={styles.top}>
                    <CompanyLogo
                        companyLogoUri={companyLogoUri}
                        isGrayscale={this.state.isGrayscale}
<<<<<<< HEAD
                        onPressed={() => functionalityNotAvailable("Fette Eier")}
=======
                        onPressed={() => {this.setState({isSponsorPressed: true})}}
>>>>>>> 13bbcae5f7ad567168c06df63859a2c83225f5f7
                    />
                    <ChallengeTypeIcon type={majorCategory} />
                </View>

<<<<<<< HEAD
                <ChallengeLayerBar headline={headline} subline={subline} expirationInMs={expirationInMs} challengeId={id} />
=======
                <ChallengeLayerBar headline={headline} subline={subline} expirationInMs={expirationInMs} />
>>>>>>> 13bbcae5f7ad567168c06df63859a2c83225f5f7
            </>
        )
    }

    private onLoad = () => {
        this.setState(prevState => ({
            ...prevState,
            isLoading: false,
        }))
    }
}
