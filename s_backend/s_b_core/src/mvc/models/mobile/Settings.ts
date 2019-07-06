import * as mongoose from "mongoose"
import { COLLECTION_SETTINGS_NAME } from "../../controllers/db/db.constants"


/** Following constants must match the attribute values of the followed model to ensure typo-safety. */
export enum SettingsFields {
    userId = "userId",
    email = "email",
    hasAcceptedDataPrivacy = "hasAcceptedDataPrivacy",
}

const SettingsModel = new mongoose.Schema({
    [SettingsFields.userId]: { type: String, unique: true, required: true, dropDups: true },
    [SettingsFields.email]: { type: String, unique: true, required: true, dropDups: true },
    [SettingsFields.hasAcceptedDataPrivacy]: { type: Boolean, required: true },
})

// Also functions addable (BEFORE .model())

// Also validator for Models possible (e.g. for email,...)

// virtualproperties (e.g. work like properties, but are functions) -> https://www.codementor.io/theoutlander/introduction-to-mongoose-for-mongodb-gw9xw34el
// Auch statische funktionen möglich um alle zu bekommen (notwendig?)

// Also Middlewares possible with Mongoose

export const Settings = mongoose.model(COLLECTION_SETTINGS_NAME, SettingsModel)
