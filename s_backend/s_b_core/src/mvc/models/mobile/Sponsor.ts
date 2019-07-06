import * as mongoose from "mongoose"
import { COLLECTION_SPONSOR_NAME } from "../../controllers/db/db.constants"
import {ImageURISource} from "./ImageURISource";
import {ApiResult} from "../../../routes/api/mobile/v1/ApiResult";


/** Following constants must match the attribute values of the followed model to ensure typo-safety. */
export enum SponsorFields {
    id = "id",
    name = "name",
    logoUri = "logoUri",
    shortDescr = "shortDescr",
    website = "website",
    email = "email",
    linkedin = "linkedin",
    youtube = "youtube",
    instagram = "instagram",
    facebook = "facebook",
}

const SponsorModel = new mongoose.Schema({
    [SponsorFields.id]: { type: String, unique: true, required: true, dropDups: true },
    [SponsorFields.name]: { type: String, required: true },
    [SponsorFields.logoUri]: { type: String, required: true, get: (v:string):ImageURISource => ({uri: v}), set: (v:ImageURISource) => v.uri},
    [SponsorFields.shortDescr]: { type: String, required: false },
    [SponsorFields.website]: { type: String, required: true },
    [SponsorFields.email]: { type: String, required: true },
    [SponsorFields.linkedin]: {type: String, required: false},
    [SponsorFields.youtube]: {type: String, required: false},
    [SponsorFields.instagram]: {type: String, required: false},
    [SponsorFields.facebook]: {type: String, required: false}
})

// Configuration, needed to enable getters
SponsorModel.set("toObject", {getters: true})
SponsorModel.set("toJSON", {getters: true})

export const sponsorToResponse = (err:any, sponsor: any): ApiResult => { // use function not arrow for this
    return new ApiResult(err,{
        [SponsorFields.id]: sponsor.id,
        [SponsorFields.name]: sponsor.name,
        [SponsorFields.logoUri]: sponsor.logoUri,
        [SponsorFields.shortDescr]: sponsor.shortDescr,
        [SponsorFields.website]: sponsor.website,
        [SponsorFields.email]: sponsor.email,
        [SponsorFields.linkedin]: sponsor.linkedin,
        [SponsorFields.youtube]: sponsor.youtube,
        [SponsorFields.instagram]: sponsor.instagram,
        [SponsorFields.facebook]: sponsor.facebook,
    })
}

export const Sponsor = mongoose.model(COLLECTION_SPONSOR_NAME, SponsorModel)
