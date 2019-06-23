import * as React from "react"
import {ImageBackground, View} from "react-native"
import globalStyles from "../../../GlobalStyles.css"
import { ChallengeTypeIcon } from "../../functional/ChallengeTypeIcon/ChallengeTypeIcon"
import { CompanyLogo } from "../../functional/CompanyLogo/CompanyLogo"
import { GrayColorImg } from "../../functional/GrayColorImg/GrayColorImg"
import { LoadingIndicator } from "../../functional/LoadingIndicator/LoadingIndicator"
import { ChallengeLayerBar } from "../ChallengeLayerBar/ChallengeLayerBar"
import SponsorFullpage from "../SponsorFullpage/SponsorFullpage"
import styles from "./ChallengeFullpage.css"
import { IChallengeFullpageProps } from "./ChallengeFullpage.props"
import { IChallengeFullpageState } from "./ChallengeFullpage.state"
import {Sponsor} from "../../../../models/Sponsor";

export class ChallengeFullpage extends React.PureComponent<IChallengeFullpageProps, IChallengeFullpageState> {
    public state: IChallengeFullpageState = {
        isGrayscale: true,
        isLoading: true,
        isSponsorPressed: false,
    }

    public render() {

        //test sponsor --> fetch here.. so we can destructure down there
        const sponsor_ikea = new Sponsor(
            "asdfawef213asdf",
            "IKEA",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/1024px-Ikea_logo.svg.png",
            "Im Herzen von IKEA steht eine Vision – den Menschen einen besseren Alltag zu schaffen. Bei IKEA findest du alles, " +
            "was dein Zuhause braucht: von den Ikonen BILLY und PAX hin zu unserem vielfältigen Sortiment an Sofas, Boxspringbetten, Küchen und unserer lebhaften Kinderwelt. Entdecke unsere beliebtesten Produktserien und informiere dich über unsere Neuheiten. Das IKEA Konzept wird auf viele Weisen lebendig: durch unsere Einrichtungshäuser, den IKEA Katalog und Broschüren, im IKEA Onlineshop und in Millionen von Haushalten auf der ganzen Welt. Wir bieten auch eine Vielzahl von Services an, die dir helfen Zeit zu sparen." +
            "Lass dir deine Möbel mit unserem Transportservice direkt nach Hause liefern oder nutze unseren Click & Collect Service.",
            "ikea@ikea.at",
            "https://www.ikea.com/at/de/"
        );

        //destructure
        const { bgImage } = this.props.challenge;
        const { sponsorName, logoUri, shortDescr, website, email} = sponsor_ikea;

        if (this.state.isSponsorPressed) {
            return (
                <SponsorFullpage
                    sponsorName={sponsorName}
                    sponsorLogo={{uri: logoUri}}
                    sponsorDescr={shortDescr}
                    whySponsor={this.props.challenge.whyDoesOrganizationSponsor}
                    email={email}
                    website={website}
                />
            )
        } else {
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

        const { id, headline, subline, companyLogoUri, majorCategory, expirationInMs } = this.props.challenge

        return (
            <>
                <View style={styles.top}>
                    <CompanyLogo
                        companyLogoUri={companyLogoUri}
                        isGrayscale={this.state.isGrayscale}
                        onPressed={() => {
                            this.setState({ isSponsorPressed: true })
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
