import * as mongoose from "mongoose"
import { COLLECTION_CHALLENGE_NAME } from "../../controllers/db/db.constants"
import { ChallengeCategory } from "./ChallengeCategory"

const ChallengeModel = new mongoose.Schema({
    id: { type: String, unique: true, required: true, dropDups: true },
    headline: { type: String, required: true },
    subline: { type: String, required: true },
    bgImage: { type: String, required: true },
    whyDoesOrganizationSponsor: { type: String, required: false },
    majorCategory: { type: ChallengeCategory, required: true },
    sponsor: { type: Number, required: true },
    expirationInMs: { type: Number, required: true },
})

// Also functions addable (BEFORE .model())

// Also validator for Models possible (e.g. for email,...)

// virtualproperties (e.g. work like properties, but are functions) -> https://www.codementor.io/theoutlander/introduction-to-mongoose-for-mongodb-gw9xw34el
// Auch statische funktionen möglich um alle zu bekommen (notwendig?)

// Also Middlewares possible with Mongoose

export const Challenge = mongoose.model(COLLECTION_CHALLENGE_NAME, ChallengeModel)
