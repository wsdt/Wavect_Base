declare const styles: {
    mainComponent: {
        height: string;
        width: string;
    };
    btnStyleTransparent: {
        borderColor: string;
    };
    btnStyleWithBorder: {
        borderColor: string;
        height: number;
    };
    btnTitleStandard: {
        color: string;
        fontSize: number;
        padding: number;
    };
    btnTitleWhiteColor: {
        color: string;
        fontSize: number;
        padding: number;
    };
    container: {
        alignItems: "center";
        flex: number;
        flexDirection: "row";
    };
    headline: {
        fontSize: number;
        fontWeight: "bold";
        margin: number;
    };
    subline: {
        fontSize: number;
        margin: number;
    };
    bottomActionContainer: {
        backgroundColor: string;
        bottom: number;
        position: "absolute";
        height: number;
        borderRadius: number;
        opacity: number;
        width: string;
    };
    topLeftCompany: {
        alignSelf: "flex-start";
        margin: number;
        opacity: number;
        maxWidth: number;
        position: "absolute";
        borderRadius: number;
        backgroundColor: string;
    };
    topRightSymbol: {
        alignSelf: "flex-end";
        position: "absolute";
        borderRadius: number;
        opacity: number;
        width: number;
        height: number;
        backgroundColor: string;
    };
};
export default styles;
