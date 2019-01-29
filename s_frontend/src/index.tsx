import * as React from "react"
import * as ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {createStore} from "redux"
import { App } from "./mvc/views/App/App"
import rootReducer from "./redux/reducers"
import "./scss/style.scss"

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("#root"))
// Maybe add serviceWorker for better performance
