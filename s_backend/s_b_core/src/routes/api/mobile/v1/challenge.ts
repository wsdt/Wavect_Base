import * as express from "express"
import { Challenge } from "../../../../mvc/models/mobile/Challenge"
import { Sponsor } from "../../../../mvc/models/mobile/Sponsor"

const router = express.Router()

const constant = 2

/**
 * use constant = 0 to indicate that we're using always a current obj
 */
router.route("/current").get((_, res) => {
    Challenge.findOne({ id: constant }).exec((err, challenge) => {
        if (challenge) {
            Sponsor.findOne({ sponsorID: challenge.get("sponsor") }).exec((err2, sponsor) => {
                console.log(challenge.get("sponsor"))

                res.json({
                    err: [err, err2],
                    res: {
                        id: challenge.get("id"),
                        headline: challenge.get("headling"),
                        subline: challenge.get("subline"),
                        whySponsor: challenge.get("whySponsor"),
                        majorCategory: challenge.get("majorCategory"),
                        sponsor: sponsor,
                        expirationInMs: challenge.get("expirationInMs"),
                    },
                })
            })
        } else {
            res.json({
                err,
            })
        }
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
