import app from "./app";

// SERVER CONSTANTS
const PORT = 8080;

runServer();

function runServer() {
    app.listen(PORT, () => {
        console.log("Express server listening on port " + PORT);
    });
}
