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
import { Sponsor } from "../../../../models/Sponsor"
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

        const { id, headline, subline, companyLogoUri, majorCategory, expirationInMs, whyDoesOrganizationSponsor } = this.props.challenge
        // test sponsor --> fetch here.. so we can destructure down there
        const sponsor_ikea = new Sponsor(
            "asdfawef213asdf",
            "IKEA",
            { uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/1024px-Ikea_logo.svg.png" },
            "Im Herzen von IKEA steht eine Vision – den Menschen einen besseren Alltag zu schaffen. Bei IKEA findest du alles, " +
                "was dein Zuhause braucht: von den Ikonen BILLY und PAX hin zu unserem vielfältigen Sortiment an Sofas, Boxspringbetten, Küchen und unserer lebhaften Kinderwelt. Entdecke unsere beliebtesten Produktserien und informiere dich über unsere Neuheiten. Das IKEA Konzept wird auf viele Weisen lebendig: durch unsere Einrichtungshäuser, den IKEA Katalog und Broschüren, im IKEA Onlineshop und in Millionen von Haushalten auf der ganzen Welt. Wir bieten auch eine Vielzahl von Services an, die dir helfen Zeit zu sparen." +
                "Lass dir deine Möbel mit unserem Transportservice direkt nach Hause liefern oder nutze unseren Click & Collect Service.",
            "https://www.ikea.com/at/de/",
            "ikea@ikea.at"
        )

        return (
            <>
                <View style={styles.top}>
                    <CompanyLogo
                        companyLogoUri={companyLogoUri}
                        isGrayscale={this.state.isGrayscale}
                        onPressed={() => {
                            this.props.navigation.navigate(routes.SponsorFullpage, { sponsor: sponsor_ikea, whySponsor: whyDoesOrganizationSponsor })
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
