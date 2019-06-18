import * as React from "react"
import { ScrollView } from "react-navigation"
import { SettingsFullpage } from "../../components/functional/SettingsFullpage/SettingsFullpage"
import { Header } from "../../components/system/Header/Header"
import { BaseScreen } from "../BaseScreen/BaseScreen"

export class SettingsScreen extends React.Component<any, any> {
    public render(): React.ReactNode {
        return (
            <BaseScreen>
                <Header
                    title="Einstellungen"
                    btnTitle="Feedback"
                    btnLink="mailto:support@bekind.com?subject=BeKind-Feedback&body=Was könnten wir verbessern?"
                />
                <ScrollView>
                    <SettingsFullpage />
                </ScrollView>
            </BaseScreen>
        )
    }
}
