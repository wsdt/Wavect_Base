import React from "react"
import {Linking, ScrollView, View} from "react-native"
import {Image, Text} from "react-native-elements";
import {styles} from "./SponsorFullpage.css"
import {ISponsorFullpageProps} from "./SponsorFullpage.props"
import {withMappedNavigationParams} from "react-navigation-props-mapper"
import {MajorBtnType, MajorButton} from "../../functional/MajorButton/MajorButton";
import {TouchableIcon} from "../../functional/TouchableIcon/TouchableIcon";

const SponsorFullpage: React.FunctionComponent<ISponsorFullpageProps> = props => {
    const { shortDescr, logoUri, email, website, sponsorYoutube, sponsorFacebook, sponsorLinkedIn, sponsorInstagram } = props.sponsor;

    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                <Image source={logoUri} containerStyle={styles.imageContainer} style={styles.imageStyle} resizeMode='contain'/>
                {/* <Text style={styles.heading}> {sponsorName}</Text> */}

                <View style={styles.hr_line} />

                <Text style={styles.boldCenteredText}> Wer sind wir? </Text>
                <Text style={styles.subline}> {shortDescr} </Text>

                <View style={styles.hr_line} />

                <Text style={styles.boldCenteredText}> Warum sponsern wir? </Text>
                <Text style={styles.subline}> {props.whySponsor} </Text>

                <View style={styles.hr_line} />
                <Text style={styles.boldCenteredText}> Du kannst uns jederzeit kontaktieren! </Text>

                <View style={styles.buttonContainer}>

                    <MajorButton
                        title={"Website"}
                        btnType={MajorBtnType.SECONDARY}
                        onPress={() => Linking.openURL(website)}
                        icon="globe"/>
                    <MajorButton
                        title={"Email"}
                        btnType={MajorBtnType.SECONDARY}
                        onPress={() => Linking.openURL(`mailto:${email}`)}
                        icon="envelope"/>
                </View>


                <View style={styles.socialMedia}>
                    {sponsorLinkedIn ? <TouchableIcon icon={"linkedin"}  onPress={() => Linking.openURL(sponsorLinkedIn)}/> : null }
                    {sponsorFacebook ? <TouchableIcon icon={"facebook"}  onPress={() => Linking.openURL(sponsorFacebook)}/> : null }
                    {sponsorInstagram ? <TouchableIcon icon={"instagram"} onPress={() => Linking.openURL(sponsorInstagram)}/> : null }
                    {sponsorYoutube ? <TouchableIcon icon={"youtube"}   onPress={() => Linking.openURL(sponsorYoutube)}/> : null }
                </View>
            </View>
        </ScrollView>
    )
};

export default withMappedNavigationParams()(SponsorFullpage)
