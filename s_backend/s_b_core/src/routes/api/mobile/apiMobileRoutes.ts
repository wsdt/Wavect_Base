import * as express from "express"
const router = express.Router()

import * as mobileV1 from "./v1/v1ApiMobileRoutes"
router.use("/v1", mobileV1)

// Add here all apiVersion which should be available

export = router
