import * as express from "express"
import { Settings } from "../../../../mvc/models/mobile/Settings"

const router = express.Router();

router.route("/:userId").get((req, res) => {
    Settings.findOne({ userId: req.params.userId }).exec((err, userSetting) => {

        res.json({
            error: err,
            res: userSetting,
        })
    })
})

router.route("/:userId").post((req, res) => {
    const settings = new Settings({
        userId: req.params.userId,
        email: req.body.email,
        hasAcceptedDataPrivacy: req.body.hasAcceptedDataPrivacy,
    })

    settings.save(err => {
        res.json({ error: err })
        if (err) {
            return console.error(`${err} --> ${settings}`)
        }
    })
})

export = router
