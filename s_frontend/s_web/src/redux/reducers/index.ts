import {GS_CACHE_USERTOKEN} from "../actions/getstream.constants"

export const DEFAULT_STATE = {
    userName: ''
}

export default function reducer(state = DEFAULT_STATE, action:any) {
    switch (action.type) {
        case GS_CACHE_USERTOKEN:
            return {...state, userTokens:{[action.userName]:action.userToken}}
        default: return state
    }
}