import { ActionCreator } from "redux"
import { GS_CACHE_USERTOKEN } from "./getstream.constants"

export const setUserToken: ActionCreator<any> = (userName: string, userToken: string) => ({
    type: GS_CACHE_USERTOKEN,
    userTokens: {
        [userName]: {
            // [] needed to use userName as key
            userToken,
        },
    },
})
