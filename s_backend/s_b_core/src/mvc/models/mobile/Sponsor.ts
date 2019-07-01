import * as mongoose from "mongoose"
import { COLLECTION_SPONSOR_NAME } from "../../controllers/db/db.constants"

const SponsorModel = new mongoose.Schema({
    sponsorID: { type: String, unique: true, required: true, dropDups: true },
    sponsorName: { type: String, required: true },
    logoUri: { type: String, required: true },
    shortDescr: { type: String, required: false },
    sponsorWebsite: { type: String, required: true },
    sponsorEmail: { type: String, required: true },
    sponsorLinkedIn: {type: String, required: false},
    sponsorYoutube: {type: String, required: false},
    sponsorInstagram: {type: String, required: false},
    sponsorFacebook: {type: String, required: false}
})

export const Sponsor = mongoose.model(COLLECTION_SPONSOR_NAME, SponsorModel)
