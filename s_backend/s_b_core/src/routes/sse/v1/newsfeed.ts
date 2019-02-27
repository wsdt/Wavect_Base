import * as EventEmitter from "events"
import * as express from "express"

export const v1Router = express.Router()
export const EE = new EventEmitter()

// EXAMPLE ---------------------------------
/*v1Router.route("/newsfeed/:userId").get((req, res) => {
  // For testing: User automatically chosen (client submitted id == user.class ID) deswegen users[0]

  EE.on(`${E_NEW_POST}_${req.params.userId}`, (e, post: Post) => {
    const sse = new SSEvent(
      String(e), // should be E_NEW_POST
      post.userId,
      JSON.stringify(post)
    )
    sse.sendSSEvent(res)

    // also save post to user
  })
})*/
