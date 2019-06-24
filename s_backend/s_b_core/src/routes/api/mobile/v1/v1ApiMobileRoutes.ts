import * as express from "express"
const router = express.Router();

import * as settings from "./settings"
router.use("/settings", settings)

export = router
