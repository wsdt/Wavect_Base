import * as React from "react"

// tslint:disable-next-line:no-empty
export const LoadingContext: React.Context<(_: LoadingStatus) => void> = React.createContext((_: LoadingStatus): void => {})
export enum LoadingStatus {
    LOADING = "loading",
    DONE = "done",
    ERROR = "error"
}


export const withLoading = (Component: any) => {
    return (props:any) => {
        return <LoadingContext.Consumer>
            {setLoading => <Component {...props} context={setLoading} />}
        </LoadingContext.Consumer>
    }
}