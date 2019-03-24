import * as React from "react"
import { View } from "react-native"
import * as styleBase from "../../../scss/base.scss"
import p from "../../../scss/parseScss"
import { RegistrationForm } from "../components/stateful/RegistrationForm/RegistrationForm"

export class RegistrationScreen extends React.Component<any, any> {
    public static navigationOptions = {
        title: "Registration",
    }

    public render() {
        return (
            <View style={p(styleBase.page)}>
                <RegistrationForm {...this.props} />
            </View>
        )
    }
}
