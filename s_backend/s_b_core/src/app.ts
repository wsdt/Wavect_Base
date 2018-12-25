import * as bodyParser from "body-parser";
import * as express from "express";

class App {
  public app: express.Application;
  public static get PORT():number {return 8090;} //getter to make it const

  constructor() {
    this.app = express();
    this.config();
    this.runServer();
  }

  private runServer() {
      this.app.listen(App.PORT, () => {
          console.log("Express server listening on port " + App.PORT);
      });
  }

  private config(): void {
    // support application/json type post data (might be needed later)
    this.app.use(bodyParser.json());

    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}


export default new App().app;
