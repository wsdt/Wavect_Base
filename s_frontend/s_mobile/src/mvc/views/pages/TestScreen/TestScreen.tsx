import * as React from "react"
import {notImplementedSync} from "../../../controllers/WarningsController"
import {TestFunctionalComponent} from "../../components/functional/TestFunctionalComponent/TestFunctionalComponent";
import {TestComponent} from "../../components/stateful/TestComponent/TestComponent";
import { BaseScreen } from "../BaseScreen/BaseScreen"

export class TestScreen extends React.Component<any, any> {
    public render(): React.ReactNode {
        return (
            <BaseScreen>
                <TestComponent/>
                <TestFunctionalComponent authCallback={() => notImplementedSync()} socialType="facebook"/>
            </BaseScreen>
        )
    }
}
