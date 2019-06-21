import React, { Component } from "react"
import { View, Text } from "react-native"
import {styles} from "./SponsorFullpage.css.tsx";
import {Button, Image} from "react-native-elements";

class SponsorFullpage extends Component<any, any> {
    render() {
<<<<<<< HEAD
        //const { sponsorId, sponsorName, logoUri} = this.props.sponsor;
=======
        const {sponsorName, shortDescr, logoUri} = this.props;
>>>>>>> 13bbcae5f7ad567168c06df63859a2c83225f5f7

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
