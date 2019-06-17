import {GestureResponderEvent} from "react-native"
import { MajorBtnType } from "./MajorButton"

export interface IMajorButtonProps {
    title: string
    btnType: MajorBtnType
    // tslint:disable-next-line:ban-types
    onPress?: (e:GestureResponderEvent) => void,
}
