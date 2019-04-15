import App from "./app"

// Start http2Server (ausgelagert für Jest, damit kein Hook offen)
App.runServer()

// Major http2Server configurations into app.ts_config()!
