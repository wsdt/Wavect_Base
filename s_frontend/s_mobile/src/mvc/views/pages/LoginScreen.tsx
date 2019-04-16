import * as React from "react"
import { LoginForm } from "../components/stateful/LoginForm/LoginForm"
import { OAuth } from "../components/stateful/OAuth/OAuth"
import {BaseScreen} from "./BaseScreen/BaseScreen"

// <Header leftComponent={<BeKindIcon width={30} height={30} />} centerComponent={{text: "Authentication", style: {color: "#fff"}}} containerStyle={p(styleBase.header)}/>

export class LoginScreen extends React.Component<any, any> {

    public render(): React.ReactNode {
        /* Pass all props down to child component (e.g. navigation props! as screen is rendered)! */
        return (
            <BaseScreen>
                    <LoginForm {...this.props} />
                    <OAuth {...this.props} />
            </BaseScreen>
        )
    }
}
