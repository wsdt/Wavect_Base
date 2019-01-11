import * as bodyParser from "body-parser"
import * as express from "express"
import * as helmet from "helmet"
/**
 * Using spdy as http2 too, but not that fast as built-in module of node.JS.
 * But unfortunately, http2-module does not support express yet, so we have to
 * wait for express V5 to use http2 instead of spdy.
 */
import * as http2 from "spdy"
import { HTTP2_OPTIONS, PORT } from "./app.constants"
import * as routes from "./routes/routes"

/**
 * Use HTTP 2, Server-Sent-Events and TSL.
 * HTTP 2 does not support non-encrypted connections
 * so backend is only accessible via HTTPS!
 *
 * No need to create separate HTTP 1.1 server for
 * redirection, as this is not a frontend.
 */
class App {
  public app: express.Application
  public server: http2.Server

  constructor() {
    this.app = express()
    this.server = http2.createServer(HTTP2_OPTIONS, this.app)
    this.config()
  }

  public runServer() {
    // @ts-ignore
    this.server.listen(PORT, err => {
      if (err) {
        console.error(err)
        return process.exit(1)
      } else {
        console.log("App:runServer: Listening on port: " + PORT)
      }
    })
  }

  private config(): void {
    // support application/json type post data (might be needed later)
    this.app.use(bodyParser.json())

    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }))

    // Add routes
    this.app.use("/", routes)

    // For additional security
    this.app.use(helmet())

    console.log("app: Configuration done.")
  }
}

export default new App()
