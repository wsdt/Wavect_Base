import React, { Component } from "react"
import { View } from "react-native"
import { MajorButton, MajorBtnType } from "../../functional/MajorButton/MajorButton"

class SponsorFullpage extends Component {
    render() {

        //const { sponsorId, sponsorName, logoUri} = this.props.sponsor;

        return (
            <View>
                <MajorButton btnType={MajorBtnType.PRIMARY} title={"Test"} />
            </View>
        )
    }
}

export default SponsorFullpage
