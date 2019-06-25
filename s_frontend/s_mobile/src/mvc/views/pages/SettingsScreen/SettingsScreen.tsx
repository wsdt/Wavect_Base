import * as React from "react"
import { ScrollView } from "react-navigation"
import { SettingsFullpage } from "../../components/stateful/SettingsFullpage/SettingsFullpage"
import { BaseScreen } from "../BaseScreen/BaseScreen"

export class SettingsScreen extends React.Component<any, any> {
    public render(): React.ReactNode {
        return (
            <BaseScreen>
                <ScrollView>
                    <SettingsFullpage />
                </ScrollView>
            </BaseScreen>
        )
    }
}
