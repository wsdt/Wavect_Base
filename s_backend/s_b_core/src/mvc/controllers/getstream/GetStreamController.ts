import * as stream from ""
import { GS_APP_ID, GS_KEY, GS_SECRET } from "./GetStreamController.constants"

export const GETSTREAM: any = getGetStreamConn()

/** Connects to GetStream API for scalable newsfeeds etc. */
function getGetStreamConn(): stream.StreamClient {
    return stream.connect(GS_KEY, GS_SECRET, GS_APP_ID)
}

/**
 * Create user Token which is passed to Frontend, so
 * that user gets access to getStream api without secret.
 *
 * This function should be called on registration or on login.
 */
export function createUserToken(userId: string): string {
    // does work, just typescript definition is wrong
    // maybe alt enter and add to getstream lib file per right click
    return GETSTREAM.createUserToken(userId)
}
