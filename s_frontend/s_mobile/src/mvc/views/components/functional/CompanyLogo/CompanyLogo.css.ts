import { StyleSheet } from "react-native"
import globalStyles from "../../../GlobalStyles.css"

const radius = globalStyles.radius.borderRadius

const styles = StyleSheet.create({
    topLeftCompany: {
        alignSelf: "flex-start",
        position: "absolute",
        flex:1,
        margin: 5,
        borderRadius: radius,
    },
    image: {
        width: 120,
        height: 70,
        resizeMode: "contain",
    },
})

export default styles
