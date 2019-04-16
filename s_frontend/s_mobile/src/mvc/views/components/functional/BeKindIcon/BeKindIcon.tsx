import * as React from "react"
import { Image } from "react-native-elements"
import { IBeKindIconProps } from "./IBeKindIconProps"

export const BeKindIcon = (props: IBeKindIconProps): JSX.Element => {
    return (
        <Image
            source={require("../../../../../../assets/img/logo.png")} // Placeholder content for remote uris possible
            style={{ ...props }}
        />
    )
}
