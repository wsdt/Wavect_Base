import * as express from "express"
import { users } from "../../../testRoutines/newsfeedDeclaration"
const router = express.Router()

router.route("/newsfeed/:userId").get((_req, res) => {
  // let userId = req.params.userId; // just assumed for testing that userId has been used to get the following User obj -> user[0]

  res.json(users[0].posts)
})

export = router
