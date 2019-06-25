import { functionalityNotAvailable } from "../../controllers/WarningsController"

export abstract class OAuthParent {
    public static authenticate = (): void => {
        return functionalityNotAvailable("OAuth")
    }
}
