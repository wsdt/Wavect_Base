import React from "react"
import { View } from "react-native"
import { Button, CheckBox, Icon, Input, Text } from "react-native-elements"
import { BACKEND_MOBILE_API } from "../../../../../globalConfiguration/globalConfig"
import styles from "./SettingsFullpage.css"
import { ISettingsFullpageState } from "./SettingsFullpage.state"
import AsyncStorage from "@react-native-community/async-storage"
import { USER_ID } from "./SettingsFullpage.constants"
import { LoadingIndicator } from "../../functional/LoadingIndicator/LoadingIndicator"
import globalStyles from "../../../GlobalStyles.css";

export class SettingsFullpage extends React.PureComponent<any, ISettingsFullpageState> {
    private static API_ENDPOINT = `${BACKEND_MOBILE_API}/settings`
    private static EMAIL_REGEX: RegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    public state: ISettingsFullpageState = {
        hasAcceptedDataPrivacy: false,
        email: "",
        validEmail: false,
        isLoadingSettings: true,
        isSavingSettings: false,
    }
    private userId: string = ""

    public componentDidMount(): void {
        this.getUserSettings()
    }


    public render() {
        return (
            <View style={[globalStyles.pageContainer, styles.fullpageWidth]}>
                {this.getSettingsView()}
            </View>
        )
    }


    private getSettingsView = () => {

        if (this.state.isLoadingSettings) {
            return <LoadingIndicator styles={[globalStyles.absoluteCenter]}/>
        }

        const isFormSubmittable = this.isFormSubmittable()
        return <>
            <Text style={styles.row}>
                Deine E-Mail Adresse wird benötigt, um dich bzgl. gewonnenen Rabatten, Gutscheinen oder Produkten/Services zu kontaktieren.
            </Text>

            <Input
                value={this.state.email}
                onChangeText={text => this.emailValidation(text)}
                containerStyle={styles.row}
                label="E-Mail"
                placeholder="Deine E-Mail"
                leftIcon={<Icon name="envelope" type="font-awesome" />}
                shake={true}
                errorMessage={this.state.validEmail ? "" : "Bitte gib eine gültige E-Mail an."}
            />

            <CheckBox
                checked={this.state.hasAcceptedDataPrivacy}
                containerStyle={styles.row}
                checkedColor="#000"
                title="Ich verstehe und akzeptiere, dass meine E-Mail-Adresse bei erfolgreichem Abschluss einer Herausforderung an den angegebenen Sponsor übermittelt wird."
                onPress={() => this.setState({ hasAcceptedDataPrivacy: !this.state.hasAcceptedDataPrivacy })}
            />

            <Button
                containerStyle={styles.row}
                type="outline"
                title=" Speichern"
                raised={isFormSubmittable}
                loading={this.state.isSavingSettings}
                disabled={!isFormSubmittable}
                icon={<Icon name="save" type="font-awesome" />}
                onPress={this.postUserSettings}
            />
        </>
    }

    private generateNewUserId = async (): Promise<string> => {
        const newUserId: string = Math.random()
            .toString(36)
            .substring(7)
        try {
            await AsyncStorage.setItem(USER_ID, newUserId)
        } catch (e) {
            console.error(e)
        }
        return newUserId
    }

    private getUserId = async () => {
        if (!this.userId) {
            // save as instance var to not fetch on every render from local storage
            const localUserId: string | null = await AsyncStorage.getItem(USER_ID)
            this.userId = localUserId === null ? await this.generateNewUserId() : localUserId
        }

        return this.userId
    }

    private getUserSettings = async () => {
        fetch(`${SettingsFullpage.API_ENDPOINT}/${await this.getUserId()}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    hasAcceptedDataPrivacy: data.res.hasAcceptedDataPrivacy,
                    email: data.res.email,
                    validEmail: true,
                    isLoadingSettings: false,
                })
                console.log("SettingsFullpage:getUserSettings: Received user settings.")
            })
            .catch(e => console.error(e))
    }

    private postUserSettings = () => {
        this.setState({ isSavingSettings: true }, async () => {
            console.log("State " + JSON.stringify(this.state))
            const rawResp = await fetch(`${SettingsFullpage.API_ENDPOINT}/${await this.getUserId()}`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: this.state.email,
                    hasAcceptedDataPrivacy: this.state.hasAcceptedDataPrivacy,
                }),
            })

            const res = await rawResp.json()
            this.setState({ isSavingSettings: false })
            console.log("SettingsFullpage:postUserSettings: Tried to save userSettings -> " + JSON.stringify(res))
        })
    }

    private emailValidation = (email: string) => {
        this.setState({ email, validEmail: SettingsFullpage.EMAIL_REGEX.test(email) })
    }

    private isFormSubmittable = (): boolean => {
        return this.state.validEmail && this.state.hasAcceptedDataPrivacy
    }
}
