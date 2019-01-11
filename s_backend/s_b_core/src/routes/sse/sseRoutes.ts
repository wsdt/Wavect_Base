import * as express from "express"
const router = express.Router()

/**
 * Also SSE routes are separated, to make it possible to have on some pages NO connection at all to
 * save resources! But keep in mind that we need to close the connections on the Frontend.
 *
 * How to properly close SSE streams:
 * https://medium.com/conectric-networks/a-look-at-server-sent-events-54a77f8d6ff7
 */

// Set headers for valid SSE handling (e.g. content-type: event-stream)
router.use((_req, res, next) => {
  res.header("Content-Type", "text/event-stream")
  res.header("Cache-Control", "no-cache")
  res.header("Connection", "keep-alive")
  next() // handle also other routes which are approached by this (here all routes)
})

// v1 routes can be modularized too!
import * as v1SSE from "./v1/example"
router.use("/v1", v1SSE)

// show page not found error for API use (json)
router.use("*", (_req, res) => {
  res.send("ERROR: Something went wrong.")
  // no next as this is the last route which is called when no other route defined.
})

export = router
