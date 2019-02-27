import * as express from "express";
import { createUserToken } from "../../../mvc/controllers/GetStreamController";

const router = express.Router();

router.route("/auth/:userId").get((req, res) => {
  const userId = req.params.userId; // just assumed for testing that userId has been used to get the following User obj -> user[0]

  // res.json(User.getUserById(req.params.userId).getPostsByFollowings())
  res.json({ token: createUserToken(userId) });
});

/* EXAMPLE --------------------------------------
router.route("/newsfeed/:userId").post((req, res) => {
  const submittedPost: Post = new Post(
    req.body.title,
    req.body.descr,
    new Date().toDateString(),
    "p",
    "#",
    req.params.userId
  )

  EE.emit(`${E_NEW_POST}_${req.params.userId}`, E_NEW_POST, submittedPost)
  res.json({ error: false })
})*/

export = router;
