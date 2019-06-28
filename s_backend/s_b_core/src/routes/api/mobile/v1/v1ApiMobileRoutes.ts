import * as express from "express"
const router = express.Router()

import * as settings from "./settings"
router.use("/settings", settings)

import * as challenge from "./challenge"
router.use("/challenge", challenge)

import * as sponsor from "./sponsor"
router.use("/sponsor", sponsor)

export = router
