import * as React from "react"
import { Image } from "react-native-elements"
import { IBeKindIconProps } from "./IBeKindIconProps"

export class BeKindIcon extends React.Component<IBeKindIconProps, any> {
    public render() {
        return (
            <Image
                source={require("../../../../../assets/img/logo.png")} // Placeholder content for remote uris possible
                style={{ ...this.props }}
            />
        )
    }
}
