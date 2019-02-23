
export abstract class _oAuthParent {
    public static authenticate = () : Promise<string> => {
        console.warn("authenticate: Not implemented.")
        return Promise.resolve("Not Implemented")
    }
}