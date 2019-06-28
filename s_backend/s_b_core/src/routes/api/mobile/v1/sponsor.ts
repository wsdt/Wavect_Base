import * as express from "express"
import {Sponsor} from "../../../../mvc/models/mobile/Sponsor";

const router = express.Router()

const constant = 1

router.route('/current').get((_, res) => {
    Sponsor.findOne({sponsorID: constant}).exec( (err, sponsor) => {
        res.json({
            err,
            sponsor
        })
    })
});

router.route('/current').post((req, res) => {
    const sponsor = new Sponsor({
        sponsorID: req.body.sponsorID,
        sponsorName: req.body.sponsorName,
        logoUri: req.body.logoUri.uri,
        shortDescr: req.body.shortDescr,
        sponsorWebsite: req.body.sponsorWebsite,
        sponsorEmail: req.body.sponsorEmail
    })

    sponsor.save((err) => {
        res.json({
            error: err,
        })

        if(err)
            return console.error(`${err} --> ${sponsor}`)
    })
});

export = router