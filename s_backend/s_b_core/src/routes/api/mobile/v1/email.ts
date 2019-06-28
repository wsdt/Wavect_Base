import * as express from "express"
import {sendEmailToSponsor} from "../../../../mvc/controllers/email/email";

const router = express.Router()


router.route("/current").post((req, res) => {
    res.json({
        error: sendEmailToSponsor(req.body.userEmail, req.body.sponsorEmail),
        res: null,
    })
})

export = router