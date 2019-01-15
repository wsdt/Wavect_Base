import * as express from "express"
import { Post } from "../../models/Post"
import { User } from "../../models/User"
import { E_NEW_POST } from "../../sse/sseEvents.constants"
import { EE } from "../../sse/v1/newsfeed"

const router = express.Router()

router.route("/newsfeed/:userId").get((req, res) => {
  // let userId = req.params.userId; // just assumed for testing that userId has been used to get the following User obj -> user[0]

  res.json(User.getUserById(req.params.userId).getPostsByFollowings())
})

router.route("/newsfeed/:userId").post((req, res) => {
  const submittedPost: Post = new Post(
    req.body.title,
    req.body.descr,
    new Date().toDateString(),
    "p",
    "#",
    req.params.userId
  )
  EE.emit(E_NEW_POST, E_NEW_POST, submittedPost)
  res.json({ error: false })
})

export = router
