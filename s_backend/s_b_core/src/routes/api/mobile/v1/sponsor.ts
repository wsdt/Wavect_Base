import * as express from "express"
import { Sponsor } from "../../../../mvc/models/mobile/Sponsor"
import {SPONSOR_CHALLENGE_CONSTANT} from '.././../../../mvc/controllers/db/db.constants'

const router = express.Router()


router.route("/current").get((_, res) => {
    Sponsor.findOne({ sponsorID: SPONSOR_CHALLENGE_CONSTANT }).exec((err, sponsor) => {
        res.json({
            err,
            sponsor,
        })
    })
})

router.route("/current").post((req, res) => {
    const sponsor = new Sponsor({
        sponsorID: req.body.sponsorID,
        sponsorName: req.body.sponsorName,
        logoUri: req.body.logoUri.uri,
        shortDescr: req.body.shortDescr,
        sponsorWebsite: req.body.sponsorWebsite,
        sponsorEmail: req.body.sponsorEmail,
        sponsorYoutube: req.body.sponsorYoutube,
        sponsorInstagram: req.body.sponsorInstagram,
        sponsorFacebook: req.body.sponsorFacebook,
        sponsorLinkedIn: req.body.sponsorLinkedIn
    });

    sponsor.save(err => {
        res.json({
            error: err,
        })

        if (err) return console.error(`${err} --> ${sponsor}`)
    })
})

export = router
