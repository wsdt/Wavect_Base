import * as express from "express"
import {Settings} from "../../../../mvc/models/mobile/Settings"

const router = express.Router()

const base = "settings"

router.route(`/${base}/:userId`).get((req, res) => {

    Settings.findOne({userId: req.params.userId}).select("email hasAcceptedDataPrivacy").exec((err, userSetting) => {
        res.json({
            error: err,
            res: userSetting,
        })
    })
})

router.route(`/${base}/:userId`).post((req, res) => {

    const settings = new Settings({
        userId: req.params.userId,
        email: req.body.email,
        hasAcceptedDataPrivacy: req.body.hasAcceptedDataPrivacy,
    })

    settings.save((err) => {
        res.json({error: err})
        if (err) {
            return console.error(`${err} --> ${settings}`)
        }
    })

    /*dbo.collection(COLLECTION_SETTINGS_NAME).insertOne(req.body, (err, res) => {
        if (err) { throw err }
        console.log("settings:CREATE: Inserted element -> "+JSON.stringify(res))
    })*/
})

export = router
