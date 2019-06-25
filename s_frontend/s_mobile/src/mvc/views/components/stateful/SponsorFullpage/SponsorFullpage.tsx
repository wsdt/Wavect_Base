import React, {PureComponent} from "react"
import {Image, Linking, ScrollView, Text, View} from "react-native"
import {MajorBtnType, MajorButton} from "../../functional/MajorButton/MajorButton"
import {styles} from "./SponsorFullpage.css"
import {ISponsorFullpageProps} from "./SponsorFullpage.props"
import {withMappedNavigationParams} from "react-navigation-props-mapper"

class SponsorFullpage extends PureComponent<ISponsorFullpageProps, any> {

    public render() {
        const {sponsorName, shortDescr, logoUri, email, website} = this.props.sponsor

        return (
            <ScrollView>
                <View style={styles.mainContainer}>
                    <Image source={logoUri}/>
                    <Text style={styles.heading}> {sponsorName}</Text>

                    <View style={styles.hr_line}/>
                    <Text style={styles.boldCenteredText}> Wer sind wir? </Text>
                    <View style={styles.hr_line}/>

                    <Text style={styles.subline}> {shortDescr} </Text>

                    <View style={styles.hr_line}/>
                    <Text style={styles.boldCenteredText}> Warum unterstützen wir dieses Projekt? </Text>
                    <View style={styles.hr_line}/>

                    <Text style={styles.subline}> </Text>

                    <Text style={styles.subline}> {this.props.whySponsor} </Text>

                    <View style={styles.hr_line}/>
                    <Text style={styles.boldCenteredText}> Kontaktiere uns doch einfach! </Text>
                    <View style={styles.hr_line}/>

                    <Text style={styles.link} onPress={() => Linking.openURL(website)}>
                        {" "}
                        {website}{" "}
                    </Text>
                    <Text style={styles.subline}> {email} </Text>

                    <MajorButton title="Zurück zum Leben" btnType={MajorBtnType.PRIMARY}/>
                </View>
            </ScrollView>
        )
    }
}

export default withMappedNavigationParams()(SponsorFullpage)