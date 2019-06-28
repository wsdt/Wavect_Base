import * as mongoose from "mongoose"
import { COLLECTION_SPONSOR_NAME } from "../../controllers/db/db.constants"

const SponsorModel = new mongoose.Schema({
    sponsorID: { type: String, unique: true, required: true, dropDups: true },
    sponsorName: { type: String, required: true },
    logoUri: { type: String, required: true },
    shortDescr: { type: String, required: false },
    sponsorWebsite: { type: String, required: true },
    sponsorEmail: { type: String, required: true },
})

export const Sponsor = mongoose.model(COLLECTION_SPONSOR_NAME, SponsorModel)
