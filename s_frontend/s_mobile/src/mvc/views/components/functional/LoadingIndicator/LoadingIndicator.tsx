import * as React from "react"
import { ActivityIndicator } from "react-native"
import { ILoadingIndicatorProps } from "./LoadingIndicator.props"

/** Convenience component to make loadingIndicator more concise. */
export const LoadingIndicator = (props: ILoadingIndicatorProps) => {
    return <ActivityIndicator size="large" color="#000000" style={props.styles} />
}
