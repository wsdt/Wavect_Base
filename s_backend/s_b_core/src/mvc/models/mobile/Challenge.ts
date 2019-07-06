import * as mongoose from "mongoose"
import {COLLECTION_CHALLENGE_NAME} from "../../controllers/db/db.constants"
import {ChallengeCategory} from "./ChallengeCategory"
import {ImageURISource} from "./ImageURISource"
import {Sponsor, SponsorFields, sponsorToResponse} from "./Sponsor"
import {ApiResult} from "../../../routes/api/mobile/v1/ApiResult"

/** Following constants must match the attribute values of the followed model to ensure typo-safety. */
export enum ChallengeFields {
    id = "id",
    headline = "headline",
    subline = "subline",
    bgImage = "bgImage",
    whyDoesOrganizationSponsor = "whyDoesOrganizationSponsor",
    majorCategory = "majorCategory",
    sponsor = "sponsor",
    expirationInMs = "expirationInMs",
}

const ChallengeModel = new mongoose.Schema({
    [ChallengeFields.id]: {type: String, unique: true, required: true, dropDups: true},
    [ChallengeFields.headline]: {type: String, required: true},
    [ChallengeFields.subline]: {type: String, required: true},
    [ChallengeFields.bgImage]: {type: String, required: true, get: (v:string):ImageURISource => ({uri: v}), set: (v:ImageURISource) => v.uri},
    [ChallengeFields.whyDoesOrganizationSponsor]: {type: String, required: true},
    [ChallengeFields.majorCategory]: {type: ChallengeCategory, required: true},
    [ChallengeFields.sponsor]: {type: Number, required: true},
    [ChallengeFields.expirationInMs]: {type: Number, required: true},
})

// Configuration, needed to enable getters
ChallengeModel.set("toObject", {getters: true})
ChallengeModel.set("toJSON", {getters: true})

export const challengeToResponse = async (err: any,challenge: any):Promise<ApiResult> => {
    const sponsor:any = await Sponsor.findOne({ [SponsorFields.id]: challenge.sponsor }).exec()

    if (!sponsor) {err = [...err, "Sponsor with id "+challenge.sponsor+" not found"]}

    return new ApiResult(err, {
        [ChallengeFields.id]: challenge.id,
        [ChallengeFields.headline]: challenge.headline,
        [ChallengeFields.subline]: challenge.subline,
        [ChallengeFields.bgImage]: challenge.bgImage,
        [ChallengeFields.whyDoesOrganizationSponsor]: challenge.whyDoesOrganizationSponsor,
        [ChallengeFields.majorCategory]: challenge.majorCategory,
        [ChallengeFields.sponsor]: sponsorToResponse(err, sponsor).res,
        [ChallengeFields.expirationInMs]: challenge.expirationInMs,
    })
}

// Also functions addable (BEFORE .model())

// Also validator for Models possible (e.g. for email,...)

// virtualproperties (e.g. work like properties, but are functions) -> https://www.codementor.io/theoutlander/introduction-to-mongoose-for-mongodb-gw9xw34el
// Auch statische funktionen möglich um alle zu bekommen (notwendig?)

// Also Middlewares possible with Mongoose

export const Challenge = mongoose.model(COLLECTION_CHALLENGE_NAME, ChallengeModel)
