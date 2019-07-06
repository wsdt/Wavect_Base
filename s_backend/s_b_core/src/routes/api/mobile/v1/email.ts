import * as express from "express"
import { sendEmailToSponsor } from "../../../../mvc/controllers/email/email"
import {Settings, SettingsFields} from "../../../../mvc/models/mobile/Settings"
import {ApiResult} from "./ApiResult"

const router = express.Router()

router.route("/current/:userId").post((req, res) => {
    const userId: string = req.params.userId
    Settings.findOne({ userId }, async (err, settings) => {
        if (err || settings === null) {
            ApiResult.sendJson(res, err, null)
        } else {
            ApiResult.sendJson(res, await sendEmailToSponsor(settings.get(SettingsFields.email), req.body.sponsorEmail), null)
        }
    })
})

export = router
