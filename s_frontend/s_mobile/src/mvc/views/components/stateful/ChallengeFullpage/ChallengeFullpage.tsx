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

export class ChallengeFullpage extends React.PureComponent<IChallengeFullpageProps, IChallengeFullpageState> {
    public state: IChallengeFullpageState = {
        isGrayscale: true,
        isLoading: true,
        isSponsorPressed: false,
    }

    public render() {
        const { bgImage } = this.props.challenge

        if (this.state.isSponsorPressed) {
            return (
                <SponsorFullpage
                    sponsorName={"IKEA"}
                    sponsorLogo={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/1024px-Ikea_logo.svg.png" }}
                    sponsorDescr={"Du suchst eine Montageanleitung?\n" +
                    "Hier findest du die meistgesuchten Montageanleitungen zu deinen Lieblingsmöbeln. Du findest die PDF-Anleitungen sortiert nach Wohnbereich und Möbelstück." +
                    " Bei Klick auf den Link öffnen sie sich in einem neuen Fenster - " +
                    "so kannst du deine Montageanleitungen abspeichern oder drucken. Alle Anleitungen aus unserem aktuellen Produktsortiment findest du auch immer auf den jeweiligen Produktseiten."}
                    whySponsor={this.props.challenge.whyDoesOrganizationSponsor}
                    email={"ikea@ikea.at"}
                    website={"https://www.ikea.com/at/de/"}
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
