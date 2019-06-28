import * as express from "express"
import { Challenge } from "../../../../mvc/models/mobile/Challenge"
import {Sponsor} from "../../../../mvc/models/mobile/Sponsor";

const router = express.Router()

const constant = 5


/**
 * use constant = 0 to indicate that we're using always a current obj
 */
router.route("/current").get((_, res) => {
    Challenge.findOne({ id: constant }).exec((err, challenge) => {

        if(challenge) {
            Sponsor.findOne({sponsorID: challenge.get('sponsor')}).exec((err2, sponsor) => {
                console.log(challenge.get('sponsor'))

                if(sponsor){
                    res.json({
                        err: [
                            err,
                            err2
                        ],
                        res: {
                            id: challenge.get('id'),
                            headline: challenge.get('headline'),
                            subline: challenge.get('subline'),
                            bgImage: {
                                uri: challenge.get("bgImage")
                            },
                            whyDoesOrganizationSponsor: challenge.get('whySponsor'),
                            majorCategory: challenge.get('majorCategory'),
                            sponsor: {
                                sponsorId: sponsor.get('sponsorID'),
                                sponsorName: sponsor.get('sponsorName'),
                                logoUri: {
                                    uri: sponsor.get('logoUri')
                                },
                                shortDescr: sponsor.get('shortDescr'),
                                email: sponsor.get('sponsorEmail'),
                                website: sponsor.get('sponsorWebsite')
                            },
                            expirationInMs: challenge.get('expirationInMs')
                        }
                    })
                }else{
                    console.log("Challenge: Sponsor undefined")
                    res.json({
                        err
                    })
                }
            })
        }else {
            console.log("Challenge: Challenge undefined")
            res.json({
                err
            })
        }
    })
});

router.route("/current").post((req, res) => {
    const challenge = new Challenge({
        id: req.body.id,
        headline: req.body.headline,
        subline: req.body.subline,
        whySponsor: req.body.whySponsor,
        majorCategory: req.body.majorCategory,
        sponsor: req.body.sponsor,
        expirationInMs: req.body.expirationInMs,
        bgImage: req.body.bgImage,
    })

    challenge.save( (err) => {
        res.json({err})
    })
})

// yarn build start
// docker-machine start
// docker-compose up --build
//

export = router
