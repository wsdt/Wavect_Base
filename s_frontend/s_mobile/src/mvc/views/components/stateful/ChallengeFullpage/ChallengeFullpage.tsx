import * as React from "react"
import { ImageBackground, View } from "react-native"
import globalStyles from "../../../GlobalStyles.css"
import { ChallengeTypeIcon } from "../../functional/ChallengeTypeIcon/ChallengeTypeIcon"
import { CompanyLogo } from "../../functional/CompanyLogo/CompanyLogo"
import { GrayColorImg } from "../../functional/GrayColorImg/GrayColorImg"
import { LoadingIndicator } from "../../functional/LoadingIndicator/LoadingIndicator"
import { ChallengeLayerBar } from "../ChallengeLayerBar/ChallengeLayerBar"
import styles from "./ChallengeFullpage.css"
import { IChallengeFullpageProps } from "./ChallengeFullpage.props"
import { IChallengeFullpageState } from "./ChallengeFullpage.state"
import { routes } from "../../system/TabRouter/HomeScreenRouter/HomeRoutes"
import { withNavigation } from "react-navigation"

class ChallengeFullpage extends React.PureComponent<IChallengeFullpageProps, IChallengeFullpageState> {
    public state: IChallengeFullpageState = {
        isGrayscale: true,
        isLoading: true,
    }

    public render() {
        // destructure
        const { bgImage } = this.props.challenge

        return (
            <GrayColorImg isGrayscale={this.state.isGrayscale}>
                <ImageBackground source={bgImage} imageStyle={globalStyles.radius} onLoad={this.onLoad} style={globalStyles.pageContainer}>
                    {this.getChallengeView()}
                </ImageBackground>
            </GrayColorImg>
        )
    }

    private getChallengeView = (): React.ReactElement => {
        if (this.state.isLoading) {
            return <LoadingIndicator />
        }

        const { id, headline, subline, sponsor, majorCategory, expirationInMs, whyDoesOrganizationSponsor } = this.props.challenge
        // test sponsor --> fetch here.. so we can destructure down there

        return (
            <>
                <View style={styles.top}>
                    <CompanyLogo
                        companyLogoUri={sponsor.logoUri}
                        isGrayscale={this.state.isGrayscale}
                        onPressed={() => {
                            this.props.navigation.navigate(routes.SponsorFullpage, { sponsor: sponsor, whySponsor: whyDoesOrganizationSponsor })
                        }}
                    />
                    <ChallengeTypeIcon type={majorCategory} />
                </View>
                <ChallengeLayerBar headline={headline} subline={subline} expirationInMs={expirationInMs} challengeId={id} />
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

export default withNavigation(ChallengeFullpage)
