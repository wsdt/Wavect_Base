import * as express from "express"
const router = express.Router()

import * as settings from "./settings"
router.use("/settings", settings);


import * as challenge from "./challenge"
router.use("/challenge", challenge);


export = router
