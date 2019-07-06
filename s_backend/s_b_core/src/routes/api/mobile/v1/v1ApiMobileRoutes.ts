import * as express from "express"
const router = express.Router()

import * as settings from "./settings"
router.use("/settings", settings)

import * as challenge from "./challenge"
router.use("/challenge", challenge)

import * as email from "./email"
router.use("/email", email)

export = router
