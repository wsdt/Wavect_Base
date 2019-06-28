import * as express from "express"
import { sendEmailToSponsor } from "../../../../mvc/controllers/email/email"
import {Settings} from "../../../../mvc/models/mobile/Settings";

const router = express.Router()

router.route("/current/:userId").post((req, res) => {
    const userId:string = req.params.userId
    Settings.findOne({userId}, (err, result) => {
        if (err || result === null) {
            res.json({
                error:err,
                res: null,
            })
        } else {
            res.json({
                error: sendEmailToSponsor(result.get("email"), req.body.sponsorEmail),
                res: null,
            })
        }
    })
})

export = router
