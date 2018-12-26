import App from "./app";

// Start server (ausgelagert für Jest, damit kein Hook offen)
App.runServer();

// Major server configurations into app.ts_config()!



App.app.get('/', (_req, res) => {
    res.send("Hello")
});

