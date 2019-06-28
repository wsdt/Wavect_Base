import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { App } from "./mvc/views/App/App"
import store from "./redux/reduxStore"
import "./scss/style.scss"

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)
// Maybe add serviceWorker for better performance
