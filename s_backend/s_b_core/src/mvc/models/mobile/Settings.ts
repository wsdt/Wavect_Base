import * as mongoose from "mongoose"
import {COLLECTION_SETTINGS_NAME} from "../../../db/db.constants"

const SettingsModel = new mongoose.Schema({
    userId: {type: String, unique: true, required: true, dropDups: true},
    email: {type: String, unique: true, required: true, dropDups: true},
    hasAcceptedDataPrivacy: {type: Boolean, required: true}
})

// Also functions addable (BEFORE .model())

export const Settings = mongoose.model(COLLECTION_SETTINGS_NAME, SettingsModel)
