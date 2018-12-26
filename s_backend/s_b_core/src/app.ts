import * as bodyParser from "body-parser";
import * as express from "express";
import * as http from "http";
import * as io from "socket.io";

/** Add more params to socket */
//interface IExtendedSocket extends io.Socket {} // when uncommented change io.Socket with IExtendedSocket

class App {
  public app: express.Application;
  public server = http.createServer();
  public io = io(this.server);
  public static get PORT(): number {
    return 8090;
  } // getter to make it const

  constructor() {
    this.app = express();
    this.config();
  }

  public runServer() {
    this.io.on("connection", (client: io.Socket) => {
      console.log("New client connected: " + client.id);

      client.on("disconnect", () => {
        console.log("Client disconnected: " + client.id);
      });
    });

    this.io.listen(App.PORT);
    console.log("App:runServer: Listening on port: " + App.PORT);
  }

  private config(): void {
    // support application/json type post data (might be needed later)
    this.app.use(bodyParser.json());

    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App();
