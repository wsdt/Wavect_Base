import {ActionCreator} from "redux"
import {LOG_IN} from "./login.constants"


export const setCurrentUsername:ActionCreator<any> = (userName:string) => ({
    type: LOG_IN,
    userName
})