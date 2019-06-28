import * as express from "express"
import { Challenge } from "../../../../mvc/models/mobile/Challenge"

const router = express.Router()

const constant = 0

/**
 * use constant = 0 to indicate that we're using always the latest
 */
router.route("/current").get((_, res) => {
    Challenge.findOne({ id: constant }).exec((err, challenge) => {
        res.json({
            err,
            challenge,
        })
    })
})

router.route("/current").post((req, res) => {
    const challenge = new Challenge({
        id: req.body.id,
        headline: req.body.headline,
        subline: req.body.subline,
        whySponsor: req.body.whySponsor,
        companyLogoUri: req.body.companyLogoUri,
        majorCategory: req.body.majorCategory,
        sponsor: req.body.sponsor,
        expirationInMs: req.body.expirationInMs,
    })

    challenge.save(err => {
        res.json({ error: err })

        if (err) {
            return console.error(`${err} --> ${challenge}`)
        }
    })
})

// yarn build start
// docker-machine start
// docker-compose up --build
//

export = router
