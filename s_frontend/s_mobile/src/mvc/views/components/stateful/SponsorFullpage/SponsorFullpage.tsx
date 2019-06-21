import React, {PureComponent} from "react"
import {Linking, ScrollView, Text, View, Image} from "react-native"
import {MajorBtnType, MajorButton} from "../../functional/MajorButton/MajorButton"
import { styles } from "./SponsorFullpage.css"
import {ISponsorFullpageProps} from "./SponsorFullpage.props";

class SponsorFullpage extends PureComponent<ISponsorFullpageProps, any> {
    public render() {
        const { sponsorName, sponsorDescr, sponsorLogo, whySponsor, email, website  } = this.props

        return (
            <ScrollView>
                <View style={styles.mainContainer}>
                    <Image source={sponsorLogo}/>
                    <Text style={styles.heading}> {sponsorName}</Text>

                    <View style={styles.hr_line}/>
                    <Text style={styles.boldCenteredText}> Wer sind wir? </Text>
                    <View style={styles.hr_line}/>


                    <Text style={styles.subline}> {sponsorDescr} </Text>

                    <View style={styles.hr_line}/>
                    <Text style={styles.boldCenteredText}> Warum unterstützen wir dieses Projekt? </Text>
                    <View style={styles.hr_line}/>

                    <Text style={styles.subline}>  </Text>

                    <Text style={styles.subline}> {whySponsor} </Text>

                    <View style={styles.hr_line}/>
                    <Text style={styles.boldCenteredText}> Kontaktiere uns doch einfach! </Text>
                    <View style={styles.hr_line}/>

                    <Text style={styles.link} onPress={() => Linking.openURL(website)}> {website} </Text>
                    <Text style={styles.subline}> {email} </Text>

                    <MajorButton title="Zurück zum Leben" btnType={MajorBtnType.PRIMARY}/>


                </View>
            </ScrollView>
        )
    }
}

export default SponsorFullpage
