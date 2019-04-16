import {StreamApp} from "expo-activity-feed"
import * as React from "react"
import {ToastAndroid} from "react-native"
import {BACKEND_URL} from "../../../../../../App.constants"
import {LoadingIndicator} from "../../functional/LoadingIndicator/LoadingIndicator"
import {GS_APP_ID, GS_KEY} from "./GetStreamParent.secrets"
import {IGetStreamParentProps} from "./IGetStreamParent.props"
import {IGetStreamParentState} from "./IGetStreamParent.state"

export class GetStreamParent extends React.Component<IGetStreamParentProps, IGetStreamParentState> {
    public state: IGetStreamParentState = {userToken: ""}  // TODO: Also to global (same with userId)

    constructor(props: IGetStreamParentProps) {
        super(props)
        this.requestGetstreamToken(props.userId)
    }

    public render(): JSX.Element {
        console.log("User token: "+this.state.userToken+" // userId: "+this.props.userId)
        if (this.state.userToken !== "") {
            return <StreamApp
                    apiKey={GS_KEY}
                    appId={GS_APP_ID}
                    token={this.state.userToken}/>
        } else {
            // Otherwise show loading indicator
            return <LoadingIndicator />
        }
    }

    private requestGetstreamToken = (userId: string) => {
        const TARGET_URI:string = `${BACKEND_URL}/api/v1/auth/${userId}`
        fetch(TARGET_URI)
            .then(res => res.json())
            .then(data => this.setState({userToken: data.token}))
            .catch((e:any) => {
                ToastAndroid.show("Could not connect to server.", ToastAndroid.SHORT)
                console.warn(`URI: ${TARGET_URI}, warning -> ${e.toString()}`)
            })
    }
}
