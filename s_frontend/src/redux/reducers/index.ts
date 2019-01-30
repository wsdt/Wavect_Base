import {LOG_IN, LOG_OUT} from "../actions/login.constants"

export const DEFAULT_STATE = {
    userName: ''
}

export default function reducer(state = DEFAULT_STATE, action:any) {
    switch (action.type) {
        case LOG_IN:
            return {...state, userName:action.userName}
        case LOG_OUT:
            return {...state, userName:''} // set emptyString to trigger logout
        default: return state
    }
}