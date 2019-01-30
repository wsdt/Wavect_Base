import {LOG_IN} from "../actions/login.constants"

export const DEFAULT_STATE = {
    userName: ''
}

export default function reducer(state = DEFAULT_STATE, action:any) {
    switch (action.type) {
        case LOG_IN:
            return {...state, userName:action.userName}
        default: return state
    }
}