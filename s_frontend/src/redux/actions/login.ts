import {ActionCreator} from "redux"
import {LOG_IN, LOG_OUT} from "./login.constants"


export const setCurrentUsername:ActionCreator<any> = (userName:string) => ({
    type: LOG_IN,
    userName
})

export const unsetCurrentUsername:ActionCreator<any> = () => ({
    type: LOG_OUT
})