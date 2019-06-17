import {Alert} from "react-native"

export const functionalityNotAvailable = (msg:string) => {
    Alert.alert(
        "Functionality not available",
        msg,
        [
            {text:"Ok"}
        ],
        {cancelable: true},
    )
}
