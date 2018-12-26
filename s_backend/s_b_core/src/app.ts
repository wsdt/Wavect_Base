import * as bodyParser from "body-parser";
import * as express from "express";
import * as http from "http";
import * as io from "socket.io";

/** Add more params to socket */
interface ExtendedSocket extends io.Socket {
    username: string;
}

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
      let chatConversation:string[] = [];
      this.io.on('connection', (client: ExtendedSocket) => {
         client.username = "Anonymous";
         console.log("New client connected: "+client.id);
         if (chatConversation.length > 0) {client.emit('prev_convo_available', chatConversation);}
         //send to all clients except myself


         client.on('change_username', (data) => {
             let sysMsg:string = `Client ${client.username} changed his name to ${data.username}`;
             console.log(sysMsg);
             client.username = data.username;
             chatConversation.push(sysMsg);
             this.io.emit('new_uploaded_msg', sysMsg);
         });

         client.on('new_message', (data) => {
             let msg = client.username+": "+data.message;
            chatConversation.push(msg);
            this.io.emit('new_uploaded_msg', msg);
         });

         client.on('disconnect', () => {
            console.log("Client disconnected: "+client.id);
         });
      });

      this.io.listen(App.PORT);
      console.log("App:runServer: Listening on port: "+App.PORT);
  }

  private config(): void {
    // support application/json type post data (might be needed later)
    this.app.use(bodyParser.json());

    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App();
