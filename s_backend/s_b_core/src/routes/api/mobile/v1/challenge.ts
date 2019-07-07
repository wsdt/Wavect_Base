import * as express from "express"
import { SPONSOR_CHALLENGE_CONSTANT } from "../../../../mvc/controllers/db/db.constants"
import { Challenge } from "../../../../mvc/models/mobile/Challenge"
import { Sponsor } from "../../../../mvc/models/mobile/Sponsor"

const router = express.Router()

/**
 * use constant = 0 to indicate that we're using always a current obj
 */
router.route("/current").get((_, res) => {
    Challenge.findOne({ id: SPONSOR_CHALLENGE_CONSTANT }).exec((err, challenge) => {
        if (challenge) {
            Sponsor.findOne({ sponsorID: challenge.get("sponsor") }).exec((err2, sponsor) => {
                if (sponsor) {
                    res.json({
                        err: [err, err2],
                        res: {
                            id: challenge.get("id"),
                            headline: challenge.get("headline"),
                            subline: challenge.get("subline"),
                            bgImage: {
                                uri: challenge.get("bgImage"),
                            },
                            whyDoesOrganizationSponsor: challenge.get("whyDoesOrganizationSponsor"),
                            majorCategory: challenge.get("majorCategory"),
                            sponsor: {
                                sponsorId: sponsor.get("sponsorID"),
                                sponsorName: sponsor.get("sponsorName"),
                                logoUri: {
                                    uri: sponsor.get("logoUri"),
                                },
                                shortDescr: sponsor.get("shortDescr"),
                                email: sponsor.get("sponsorEmail"),
                                website: sponsor.get("sponsorWebsite"),
                                sponsorFacebook: sponsor.get("sponsorFacebook"),
                                sponsorYoutube: sponsor.get("sponsorYoutube"),
                                sponsorLinkedIn: sponsor.get("sponsorLinkedIn"),
                                sponsorInstagram: sponsor.get("sponsorInstagram"),
                            },
                            expirationInMs: challenge.get("expirationInMs"),
                        },
                    })
                } else {
                    console.log("Challenge: Sponsor undefined")
                    res.json({
                        err: [err, "Sponsor undefined"],
                    })
                }
            })
        } else {
            console.log("Challenge: Challenge undefined")
            res.json({
                err: [err, "Challenge undefined"],
            })
        }
    })
})

router.route("/current").post((req, res) => {
    const challenge = new Challenge({
        id: req.body.id,
        headline: req.body.headline,
        subline: req.body.subline,
        whyDoesOrganizationSponsor: req.body.whyDoesOrganizationSponsor,
        majorCategory: req.body.majorCategory,
        sponsor: req.body.sponsor,
        expirationInMs: req.body.expirationInMs,
        bgImage: req.body.bgImage,
    })

    challenge.save(err => {
        res.json({ err })
    })
})

export = router
