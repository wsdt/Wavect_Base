import * as React from "react"
import { View } from "react-native"
import * as styleBase from "../../../scss/base.scss"
import p from "../../../scss/parseScss"
import {GetStreamParent} from "../components/stateful/GetStreamParent/GetStreamParent"

// <Header leftComponent={<BeKindIcon width={30} height={30} />} centerComponent={{text: "Authentication", style: {color: "#fff"}}} containerStyle={p(styleBase.header)}/>

export class ProfileScreen extends React.Component<any, any> {

    public render(): React.ReactNode {
        /* Pass all props down to child component (e.g. navigation props! as screen is rendered)! */
        return (
            <View style={p(styleBase.page)}>
                <View style={p(styleBase.center)}>
                   <GetStreamParent {...this.props} userId="ERROR"/> {/* TODO: Real ID from our db*/}
                </View>
            </View>
        )
    }
}
