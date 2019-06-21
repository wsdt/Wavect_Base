import React, { Component } from "react"
import { Text, View } from "react-native"
import { Button, Image } from "react-native-elements"
import { styles } from "./SponsorFullpage.css"
import { ISponsorFullpageProps } from "./SponsorFullpage.props"

class SponsorFullpage extends Component<ISponsorFullpageProps, any> {
    public render() {
        const { sponsorName, sponsorDescr, sponsorLogo } = this.props

        return (
            <View style={styles.mainContainer}>
                <Image source={sponsorLogo} />
                <Text style={styles.heading}> {sponsorName}</Text>
                <Text style={styles.subline}> {sponsorDescr} </Text>
                <Button title={"Zurück"} containerStyle={styles.fullSize} />
            </View>
        )
    }
}

export default SponsorFullpage
