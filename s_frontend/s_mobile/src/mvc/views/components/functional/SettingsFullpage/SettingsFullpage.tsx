import React from "react"
import {CheckBox, Icon, Input, Text} from "react-native-elements"
import styles from "./SettingsFullpage.css"
import {ISettingsFullpageState} from "./SettingsFullpage.state"
import {View} from "react-native";


export class SettingsFullpage extends React.PureComponent<any, ISettingsFullpageState> {

    public state: ISettingsFullpageState = {
        isEMailUsageAccepted: false,
    }

    public render() {
        return <View style={styles.container}>
            <Text style={styles.row}>Deine E-Mail Adresse wird benötigt, um dich bzgl. gewonnenen Rabatten, Gutscheinen
                oder Produkten/Services zu kontaktieren.</Text>

            <Input
                containerStyle={styles.row}
                label="E-Mail"
                placeholder="Deine E-Mail"
                leftIcon={<Icon name="envelope" type="font-awesome"/>}
                shake={true}
                errorMessage="Bitte gib eine gültige E-Mail an."/>


            <CheckBox checked={this.state.isEMailUsageAccepted}
                      containerStyle={styles.row}
                      checkedColor="#000"
                      title="Ich verstehe und akzeptiere, dass meine E-Mail-Adresse bei erfolgreichem Abschluss einer Herausforderung an den angegebenen Sponsor übermittelt wird."
                      onPress={() => this.setState({isEMailUsageAccepted: !this.state.isEMailUsageAccepted})}/>
        </View>
    }
}