import { StyleSheet } from "react-native"

const globalStyles = StyleSheet.create({
    absoluteCenter: {
        position: "absolute", left: 0,  top: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center"
    },
    fullSize: {
        height: "100%",
        width: "100%",
    },
    radius: {
        borderRadius: 10,
    },
})

export default globalStyles
