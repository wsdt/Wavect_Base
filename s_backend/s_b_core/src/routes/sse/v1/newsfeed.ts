import * as EventEmitter from "events"
import * as express from "express"
import { Post } from "../../models/Post"
import { SSEvent } from "../../models/SSEvent"
import {E_NEW_POST} from "../sseEvents.constants"

export const v1Router = express.Router()
export const EE = new EventEmitter()

v1Router.route("/newsfeed/:userId").get((req, res) => {
  // For testing: User automatically chosen (client submitted id == user.class ID) deswegen users[0]

     // TODO: put here only single post!

    EE.on(E_NEW_POST, (e, post:Post) => {
      const sse = new SSEvent(
          String(e), // should be E_NEW_POST
          req.params.userId,
          JSON.stringify(post)
      )
      sse.sendSSEvent(res)
    })
})


