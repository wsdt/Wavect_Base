import { StyleSheet } from "react-native"
import globalStyles from "../../../GlobalStyles.css"

const radius = globalStyles.radius.borderRadius

const styles = StyleSheet.create({
    topLeftCompany: {
        alignSelf: "flex-start",
        margin: 5,
        position: "absolute",
        borderRadius: radius,
    },
    image: {
        width: 120,
        height: 70,
        resizeMode: "contain",
    },
})

export default styles
