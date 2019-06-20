import React from "react"
import {View} from "react-native"
import {Button, CheckBox, Icon, Input, Text} from "react-native-elements"
import {BACKEND_MOBILE_API} from "../../../../../globalConfiguration/globalConfig"
import styles from "./SettingsFullpage.css"
import {ISettingsFullpageState} from "./SettingsFullpage.state"

export class SettingsFullpage extends React.PureComponent<any, ISettingsFullpageState> {

    private static API_ENDPOINT = `${BACKEND_MOBILE_API}/settings`
    private static EMAIL_REGEX: RegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    public state: ISettingsFullpageState = {
        isEMailUsageAccepted: false,
        email: "",
        validEmail: false,
        isSaving: false,
    }

    public componentDidMount(): void {
        this.getUserSettings()
    }

    public render() {
        const isFormSubmittable = this.isFormSubmittable()

        return (
            <View style={styles.container}>
                <Text style={styles.row}>
                    Deine E-Mail Adresse wird benötigt, um dich bzgl. gewonnenen Rabatten, Gutscheinen oder
                    Produkten/Services zu kontaktieren.
                </Text>

                <Input
                    value={this.state.email}
                    onChangeText={text => this.emailValidation(text)}
                    containerStyle={styles.row}
                    label="E-Mail"
                    placeholder="Deine E-Mail"
                    leftIcon={<Icon name="envelope" type="font-awesome"/>}
                    shake={true}
                    errorMessage={this.state.validEmail ? "" : "Bitte gib eine gültige E-Mail an."}
                />

                <CheckBox
                    checked={this.state.isEMailUsageAccepted}
                    containerStyle={styles.row}
                    checkedColor="#000"
                    title="Ich verstehe und akzeptiere, dass meine E-Mail-Adresse bei erfolgreichem Abschluss einer Herausforderung an den angegebenen Sponsor übermittelt wird."
                    onPress={() => this.setState({isEMailUsageAccepted: !this.state.isEMailUsageAccepted})}
                />

                <Button
                    containerStyle={styles.row}
                    type="outline"
                    title=" Speichern"
                    raised={isFormSubmittable}
                    loading={this.state.isSaving}
                    disabled={!isFormSubmittable}
                    icon={<Icon name="save" type="font-awesome"/>}
                    onPress={this.save}
                />
            </View>
        )
    }


    private getUserSettings = () => {
        fetch(`${SettingsFullpage.API_ENDPOINT}/`)
            .then(res => res.json())
            .then(data => {
                this.setState({isEMailUsageAccepted: data.isEMailUsageAccepted, email: data.email})
                console.log("SettingsFullpage:getUserSettings: Received user settings.")
            })
            .catch(e => console.error(e))
    }


    private emailValidation = (email: string) => {
        this.setState({email, validEmail: SettingsFullpage.EMAIL_REGEX.test(email)})
    }

    private save = () => {
        this.setState({isSaving: true})

        // TODO: save async
        this.setState({isSaving: false})
    }

    private isFormSubmittable = (): boolean => {
        return this.state.validEmail && this.state.isEMailUsageAccepted
    }
}