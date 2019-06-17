import { Alert } from "react-native"

export const functionalityNotAvailable = (msg: string) => {
    Alert.alert("Nicht verfügbar", msg, [{ text: "Ok" }], { cancelable: true })
}
