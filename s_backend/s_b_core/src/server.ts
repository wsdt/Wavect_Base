import app from "./app";

// SERVER CONSTANTS
const PORT = 3080;

app.listen(PORT, () => {
    console.log("Express server listening on port " + PORT);
});
