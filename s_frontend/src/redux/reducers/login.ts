import {Reducer} from "redux"

const login:Reducer = (state = [], action:any) => {
    switch (action.type) {
        case 'LOG_IN':
            return [
                ...state,
                {
                id: action.id,
                userName: action.userName
                }
            ]
        default: return state
    }
}

export default login