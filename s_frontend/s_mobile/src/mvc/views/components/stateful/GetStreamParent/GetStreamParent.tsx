import { StreamApp } from "expo-activity-feed"
import * as React from "react"
import { SafeAreaView } from "react-navigation"
import { BACKEND_URL} from "../../../../../../App.constants"
import { GS_API_KEY, GS_APP_ID } from "./GetStreamParent.secrets"
import {IGetStreamParentProps} from "./IGetStreamParent.props"
import {IGetStreamParentState} from "./IGetStreamParent.state"

export class GetStreamParent extends React.Component<IGetStreamParentProps, IGetStreamParentState> {
    public state:IGetStreamParentState = {userToken:""}

    constructor(props:IGetStreamParentProps) {
        super(props)
        this.requestGetstreamToken(props.userId)
    }
    
    public render(): React.ReactNode {
        return (
            <SafeAreaView style={{ flex: 1 }} forceInset={{ top: "always" }}>
                <StreamApp
                    apiKey={GS_API_KEY}
                    appId={GS_APP_ID}
                    token={this.state.userToken}
                />
            </SafeAreaView>
        )
    }

    private requestGetstreamToken = (userId:string) => {
        fetch(`${BACKEND_URL}/api/v1/auth/${userId}`)
            .then(res=> res.json())
            .then(data => this.setState({userToken:data.token}))
    }
}
