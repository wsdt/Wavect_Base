import * as React from "react"
import { IUser } from "../_general.interfaces/IUser"
import Newsfeed from "../Newsfeed/Newsfeed"

export const HOME = (props: IUser) => {
    return (
        <React.Fragment>
            <h2>Home</h2>
            <Newsfeed {...props} />
        </React.Fragment>
    )
}
