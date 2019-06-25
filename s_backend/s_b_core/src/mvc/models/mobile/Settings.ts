import * as mongoose from "mongoose"
import { COLLECTION_SETTINGS_NAME } from "../../controllers/db/db.constants"

const SettingsModel = new mongoose.Schema({
    userId: { type: String, unique: true, required: true, dropDups: true },
    email: { type: String, unique: true, required: true, dropDups: true },
    hasAcceptedDataPrivacy: { type: Boolean, required: true },
})

// Also functions addable (BEFORE .model())

// Also validator for Models possible (e.g. for email,...)

// virtualproperties (e.g. work like properties, but are functions) -> https://www.codementor.io/theoutlander/introduction-to-mongoose-for-mongodb-gw9xw34el
// Auch statische funktionen möglich um alle zu bekommen (notwendig?)

// Also Middlewares possible with Mongoose

export const Settings = mongoose.model(COLLECTION_SETTINGS_NAME, SettingsModel)
