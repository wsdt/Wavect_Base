import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";
import "./scss/style.scss";

const ROOT = document.querySelector("#root");

ReactDOM.render(<App name="ExampleProperty" />, ROOT);
//Maybe add serviceWorker for better performance