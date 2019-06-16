import * as React from "react"
import { Grayscale } from "react-native-color-matrix-image-filters"
import globalStyles from "../../../GlobalStyles.css"
import { IGrayColorImgProps } from "./GrayColorImg.props"

export const GrayColorImg: React.FunctionComponent<IGrayColorImgProps> = props => {
    return props.isGrayscale ? <Grayscale style={globalStyles.fullSize}>{props.children}</Grayscale> : <>{props.children}</>
}
