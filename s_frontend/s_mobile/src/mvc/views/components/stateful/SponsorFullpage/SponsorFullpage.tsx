import React from "react"
import { Image, Linking, ScrollView, View } from "react-native"
import { Text } from "react-native-elements"
import { withMappedNavigationParams } from "react-navigation-props-mapper"
import { styles } from "./SponsorFullpage.css"
import { ISponsorFullpageProps } from "./SponsorFullpage.props"

const SponsorFullpage: React.FunctionComponent<ISponsorFullpageProps> = props => {
    const { sponsorName, shortDescr, logoUri, email, website } = props.sponsor

    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                <Image source={logoUri} />
                <Text style={styles.heading}> {sponsorName}</Text>

                <View style={styles.hr_line} />
                <Text style={styles.boldCenteredText}> Wer sind wir? </Text>
                <View style={styles.hr_line} />

                <Text style={styles.subline}> {shortDescr} </Text>

                <View style={styles.hr_line} />
                <Text style={styles.boldCenteredText}> Warum unterstützen wir dieses Projekt? </Text>
                <View style={styles.hr_line} />

                <Text style={styles.subline}> </Text>

                <Text style={styles.subline}> {props.whySponsor} </Text>

                <View style={styles.hr_line} />
                <Text style={styles.boldCenteredText}> Kontaktiere uns doch einfach! </Text>
                <View style={styles.hr_line} />

                <Text style={styles.link} onPress={() => Linking.openURL(website)}>
                    {" "}
                    {website}{" "}
                </Text>
                <Text style={styles.subline}> {email} </Text>
            </View>
        </ScrollView>
    )
}

export default withMappedNavigationParams()(SponsorFullpage)
