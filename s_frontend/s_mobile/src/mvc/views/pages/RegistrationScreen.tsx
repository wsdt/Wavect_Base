import * as React from "react"
import { RegistrationForm } from "../components/stateful/RegistrationForm/RegistrationForm"
import { BaseScreen } from "./BaseScreen/BaseScreen"

export class RegistrationScreen extends React.Component<any, any> {
    public render(): React.ReactNode {
        return (
            <BaseScreen>
                <RegistrationForm {...this.props} />
            </BaseScreen>
        )
    }
}
