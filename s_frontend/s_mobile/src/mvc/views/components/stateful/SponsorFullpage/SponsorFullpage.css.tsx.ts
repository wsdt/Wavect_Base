import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    mainContainer: {
        width: 400,
        flex: 1,
        height: "100%",
        display: "flex",
        justifyContent: "flex-start",
        backgroundColor: "#ccc",
    },
    bottomBackButton: {
        width: "100%",
        height: 50,
        justifyContent: "flex-end"
    },
    heading: {
        fontSize: 100,
        fontWeight: 'bold',
        letterSpacing: 10,
        textAlign: "center",
    },
    subline: {
        fontSize: 20,
        textAlign: "center",
    },

    hr_line: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        margin: 20
    },
    boldCenteredText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
    },
    link: {
        fontSize: 20,
        textAlign: 'center',
        color: 'blue'
    }
});
