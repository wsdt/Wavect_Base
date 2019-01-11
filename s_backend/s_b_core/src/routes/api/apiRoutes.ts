import * as express from "express"
const router = express.Router()

// Set headers for valid API handling (e.g. content-type: json)
router.use((_req, res, next) => {
  res.header("Content-Type", "application/json")
  next() // handle also other routes which are approached by this (here all routes)
})

// v1 routes can be modularized too!
import * as v1API from "./v1/example"
router.use("/v1", v1API)

// show page not found error for API use (json)
router.use("*", (_req, res) => {
  res.json({ error: { msg: "Route not found.", err_code: 404 } })
  // no next as this is the last route which is called when no other route defined.
})

export = router
