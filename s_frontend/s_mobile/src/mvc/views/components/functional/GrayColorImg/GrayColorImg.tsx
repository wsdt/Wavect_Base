import * as React from "react"
import { Grayscale } from "react-native-color-matrix-image-filters"
import globalStyles from "../../../GlobalStyles.css"
import { IGrayColorImgProps } from "./GrayColorImg.props"

export const GrayColorImg: React.FunctionComponent<IGrayColorImgProps> = props => {
    //  style={globalStyles.fullSize}
    return props.isGrayscale ? <Grayscale>{props.children}</Grayscale> : <>{props.children}</>
}
