import * as React from "react"
import {OAuthFacebook} from "../../../models/oauth/childs/oAuthFacebook"
import {TestFunctionalComponent} from "../../components/functional/TestFunctionalComponent/TestFunctionalComponent"
import {TestComponent} from "../../components/stateful/TestComponent/TestComponent"
import { BaseScreen } from "../BaseScreen/BaseScreen"

export class TestScreen extends React.Component<any, any> {
    public render(): React.ReactNode {
        return (
            <BaseScreen>
                <TestComponent/>
                <TestFunctionalComponent authCallback={OAuthFacebook.authenticate} socialType="facebook"/>
            </BaseScreen>
        )
    }
}

