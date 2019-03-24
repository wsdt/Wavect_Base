import { StreamApp } from "expo-activity-feed"
import * as React from "react"
import { SafeAreaView } from "react-navigation"
import { GS_API_KEY, GS_APP_ID } from "./GetStreamParent.secrets"

export class GetStreamParent extends React.Component<any, any> {
    private static requestGetstreamToken(): string {
        // TODO: Request from server
        return "PLACE_SERVERSIDE_TOKEN_HERE"
    }
    public render(): React.ReactNode {
        return (
            <SafeAreaView style={{ flex: 1 }} forceInset={{ top: "always" }}>
                <StreamApp
                    apiKey={GS_API_KEY}
                    appId={GS_APP_ID}
                    token={() => GetStreamParent.requestGetstreamToken()}
                />
            </SafeAreaView>
        )
    }
}
