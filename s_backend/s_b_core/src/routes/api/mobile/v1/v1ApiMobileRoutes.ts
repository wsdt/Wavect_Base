import * as express from "express"
const router = express.Router()

import * as settings from "./settings"
router.use("/settings", settings)

// ADD here all other v1Routes

export = router
