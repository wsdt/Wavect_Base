import { StyleSheet } from "react-native"
import globalStyles from "../../../GlobalStyles.css"

const radius = globalStyles.radius.borderRadius

const styles = StyleSheet.create({
    mainComponent: {
        height: "100%",
        width: "100%",
    },

    btnStyleTransparent: {
        borderColor: "transparent",
    },

    btnStyleWithBorder: {
        borderColor: "#000",
        height: 60,
    },

    btnTitleStandard: {
        color: "#000",
        fontSize: 20,
        padding: 10,
    },
    btnTitleWhiteColor: {
        color: "#fff",
        fontSize: 20,
        padding: 10,
    },
    container: {
        alignItems: "center",
        flex: 1,
        flexDirection: "row",
    },

    headline: {
        fontSize: 32,
        fontWeight: "bold",
        margin: 10,
    },
    subline: {
        fontSize: 20,
        margin: 5,
    },
    bottomActionContainer: {
        backgroundColor: "#ccc",
        bottom: 0,
        position: "absolute",
        height: 200,
        borderRadius: radius,
        opacity: 0.7,
        width: "100%",
    },
    topLeftCompany: {
        alignSelf: "flex-start",
        margin: 5,
        opacity: 0.8,
        maxWidth: 120,
        position: "absolute",
        borderRadius: radius,
        backgroundColor: "#ccc",
    },
    topRightSymbol: {
        alignSelf: "flex-end",
        position: "absolute",
        borderRadius: 500,
        opacity: 0.5,
        width: 75,
        height: 75,
        backgroundColor: "#000",
    },
})

export default styles
