import * as express from "express"
import { Settings } from "../../../../mvc/models/mobile/Settings"
import {ApiResult} from "./ApiResult"

const router = express.Router()

router.route("/:userId").get((req, res) => {
    Settings.findOne({ userId: req.params.userId }).exec((err, userSetting) => {
        ApiResult.sendJson(res, err, userSetting)
    })
})

router.route("/:userId").post((req, res) => {
    const settings = new Settings({
        userId: req.params.userId,
        email: req.body.email,
        hasAcceptedDataPrivacy: req.body.hasAcceptedDataPrivacy,
    })

    settings.save(err => {
        ApiResult.sendJson(res, err, null)
    })
})

export = router
