import * as React from "react"
import {View} from "react-native"
import styles from "./GrayColorImg.css"


export class GrayColorImg extends React.PureComponent<any, any> {
    public state = {
        isImageGrayscale: true,
    }

    public render() {

        console.log("######### "+React.Children.count(this.props.children))

        let Res:any = null
        React.Children.map(this.props.children, (child) => {
            console.log("####### c "+child.toString())
            Res = <>{child}</>
        })
        return (Res == null) ? null : <Res style={styles.backGreyImg} />

        /* style={[Img.style, styles.frontColorImg]} */
    }
}