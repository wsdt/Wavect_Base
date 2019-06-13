import * as React from "react"
import {View} from "react-native"
import styles from "./GrayColorImg.css"


export class GrayColorImg extends React.PureComponent<any, any> {
    public state = {
        isImageGrayscale: true,
    }

    public render() {
        const Img:any = React.Children.only(this.props.children)
        return <>
            <Img />
        </>
    }
}