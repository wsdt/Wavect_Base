import { StyleSheet } from "react-native"
import {primaryBackgroundColor} from "../../../../../globalConfiguration/globalConstants.css";

const styles = StyleSheet.create({
    primaryBtnContainer: {
        backgroundColor: "#f3f3ee",
        borderRadius: 3,

        flex: 1.5,
        margin: 5,
    },
    highlightedBtnContainer: {
        backgroundColor: primaryBackgroundColor,
        borderRadius: 3,

        flex: 1.5,
        margin: 5,
    },
    secondaryBtnContainer: {
        flex: 1,
        margin: 5,
    },
    btnTitleStandard: {
        color: "#000",
        fontSize: 20,
        padding: 10,
    },
    btnStyleWithBorder: {
        borderColor: "#000",
        height: 60,
    },
})

export default styles
