import * as express from "express"
import { CLIENT_WEB } from "../app.constants"

const router = express.Router()

// Enable CORS to make the API and SSE accessible from other servers
router.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", CLIENT_WEB) // if you want allow all just put "*"
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next() // handle also other routes which are approached by this (here all routes)
})

// Add APIs to routes
import * as apiRoutes from "./api/apiRoutes"
router.use("/api", apiRoutes)

// Add Server-Sent-Events to routes
import * as sseRoutes from "./sse/sseRoutes"
router.use("/sse", sseRoutes)

export = router
