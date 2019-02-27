import * as express from "express"

const router = express.Router()

// Add APIs to routes
import * as apiRoutes from "./api/apiRoutes"
router.use("/api", apiRoutes)

// Add Server-Sent-Events to routes
import * as sseRoutes from "./sse/sseRoutes"
router.use("/sse", sseRoutes)

export = router
