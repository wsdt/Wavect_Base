import { StyleSheet } from "react-native"

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
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },

    /* 'Ablehnen' with flex: 1 for 33% of size */
    buttonContainer: {
        flex: 1,
        margin: 5,
    },

    /* 'Annehmen' with flex: 1.5 and bright withe */
    buttonContainer2: {
        flex: 1.5,
        margin: 5,
        backgroundColor: "#f3f3ee",
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
        position: "absolute",
        bottom: 0,
        height: 200,
        opacity: 0.7,
        width: "100%",
    },

    topLeftCompany: {
        alignSelf: "flex-start",
        margin: 5,
        opacity: 0.8,
        maxWidth: 120,
        position: "absolute",
        borderRadius: 5,
        backgroundColor: "#ccc",
    },

    topRightSymbol: {
        alignSelf: "flex-end",
        marginRight: -20,
        position: "absolute",
        borderRadius: 500,
        width: 75,
        height: 75,
        backgroundColor: "#fff",
    },
})

export default styles
