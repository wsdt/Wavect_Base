import { StyleSheet } from "react-native"

export const GREY = "#9b9b9b"

const globalStyles = StyleSheet.create({
    absoluteCenter: {
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    tooltipText: {
        color: "#fff",
    },
    fullSize: {
        height: "100%",
        width: "100%",
    },
    radius: {
        borderRadius: 15,
    },
    center: {
        justifyContent: "center",
        alignItems: "center",
    },
})

export default globalStyles
