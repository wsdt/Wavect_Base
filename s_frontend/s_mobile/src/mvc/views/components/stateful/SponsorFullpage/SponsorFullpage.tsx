import React, { Component } from "react"
import {View, Text, ScrollView, Linking} from "react-native"
import { styles } from "./SponsorFullpage.css.tsx"
import {MajorBtnType, MajorButton} from "../../functional/MajorButton/MajorButton";

class SponsorFullpage extends Component<any, any> {
    render() {
        const { sponsorName, shortDescr, whySponsor, email, website  } = this.props

        return (
            <ScrollView>
                <View style={styles.mainContainer}>
                    { /* <Image source={logoUri} /> */}
                    <Text style={styles.heading}> {sponsorName}</Text>

                    <View style={styles.hr_line}/>
                    <Text style={styles.boldCenteredText}> Wer sind wir? </Text>
                    <View style={styles.hr_line}/>


                    <Text style={styles.subline}> {shortDescr} </Text>

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
