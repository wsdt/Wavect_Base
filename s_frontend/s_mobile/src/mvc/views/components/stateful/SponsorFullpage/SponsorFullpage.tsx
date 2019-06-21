import React, { Component } from "react"
import { View, Text } from "react-native"
import {styles} from "./SponsorFullpage.css.tsx";
import {Button, Image} from "react-native-elements";

class SponsorFullpage extends Component<any, any> {
    render() {
        const {sponsorName, shortDescr, logoUri} = this.props;

        return (
            <View style={styles.mainContainer}>
                <Image source={logoUri}/>
                <Text style={styles.heading}> {sponsorName}</Text>
                <Text style={styles.subline}> {shortDescr} </Text>
                <Button title={"Zurück"} containerStyle={styles.fullSize}/>
            </View>
        )
    }
}

export default SponsorFullpage
