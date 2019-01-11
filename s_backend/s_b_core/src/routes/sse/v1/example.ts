import * as express from "express"

const router = express.Router()

/*router.route("/newsfeed/:userId").get((req, res) => {
  // For testing: User automatically chosen (client submitted id == user.class ID) deswegen users[0]
  setInterval(() => {
    const sse = new SSEvent(
      "new_post",
      req.params.userId,
      JSON.stringify(
        new Post("New post!", "descr of new post", "31.1.2019", "v", "noLink")
      )
    ) // TODO: put here only single post!
    res.write(sse.toString())
  }, 4000)*/


export = router
