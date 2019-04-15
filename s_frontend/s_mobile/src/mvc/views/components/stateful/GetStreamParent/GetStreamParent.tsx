import {StreamApp} from "expo-activity-feed"
import * as React from "react"
import {Text, ToastAndroid} from "react-native"
import {SafeAreaView} from "react-navigation"
import {BACKEND_URL} from "../../../../../../App.constants"
import {GS_KEY, GS_APP_ID} from "./GetStreamParent.secrets"
import {IGetStreamParentProps} from "./IGetStreamParent.props"
import {IGetStreamParentState} from "./IGetStreamParent.state"

export class GetStreamParent extends React.Component<IGetStreamParentProps, IGetStreamParentState> {
    public state: IGetStreamParentState = {userToken: ""}  // TODO: Also to global (same with userId)

    constructor(props: IGetStreamParentProps) {
        super(props)
        this.requestGetstreamToken(props.userId)
    }


    public render(): React.ReactNode {
        console.log("User token: "+this.state.userToken+" // userId: "+this.props.userId)
        if (this.state.userToken !== "") {
            return <SafeAreaView style={{flex: 1}} forceInset={{top: "always"}}>
                <StreamApp
                    apiKey={GS_KEY}
                    appId={GS_APP_ID}
                    token={this.state.userToken}/>
            </SafeAreaView>
        } else {
            return <Text>Loading ...</Text>
        }
    }

    private requestGetstreamToken = (userId: string) => {
        const TARGET_URI:string = `${BACKEND_URL}/api/v1/auth/${userId}`
        fetch(TARGET_URI)
            .then(res => res.json())
            .then(data => this.setState({userToken: data.token}))
            .catch((e:any) => {
                ToastAndroid.show("Could not connect to http2Server.", ToastAndroid.SHORT)
                console.warn(`URI: ${TARGET_URI}, warning -> ${e.toString()}`)
            })
    }
}
