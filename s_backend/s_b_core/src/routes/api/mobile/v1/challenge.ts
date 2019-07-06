import * as express from "express"
import {SPONSOR_CHALLENGE_CONSTANT} from "../../../../mvc/controllers/db/db.constants"
import {Challenge, challengeToResponse} from "../../../../mvc/models/mobile/Challenge"
import {ApiResult} from "./ApiResult"

const router = express.Router()


/**
 * use constant = 0 to indicate that we're using always a current obj
 */
router.route("/current").get((_, res) => {
    Challenge.findOne({id: SPONSOR_CHALLENGE_CONSTANT}).exec(async (err, challenge) => {
        if (challenge) {
            (await challengeToResponse(err, challenge)).sendJson(res)
        } else {
            console.log("Challenge: Challenge undefined")
            ApiResult.sendJson(res, [err, "Challenge undefined"], null)
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
        ApiResult.sendJson(res, err, null)
    })
})

export = router
