import * as React from "react"
import {Text} from "react-native-elements"
import {ScrollView} from "react-navigation"
import {Header} from "../../components/system/Header/Header"
import {BaseScreen} from "../BaseScreen/BaseScreen"

export class SettingsScreen extends React.Component<any, any> {
    public render(): React.ReactNode {
        return (
            <BaseScreen>
                <Header title="Challenge" btnTitle="Feedback"
                        btnLink="mailto:support@bekind.com?subject=BeKind-Feedback&body=Was könnten wir verbessern?"/>
                <ScrollView>
                    <Text>Wait</Text>
                </ScrollView>
            </BaseScreen>
        )
    }
}
