import * as React from "react"
import * as ReactDOM from "react-dom"
import { App } from "./mvc/views/functional/App/App"
import "./scss/style.scss"

ReactDOM.render(<App />, document.getElementById("root"))
// Maybe add serviceWorker for better performance
