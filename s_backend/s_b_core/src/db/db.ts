import {MongoClient} from "mongodb"
import {DATABASE_URI} from "../app.constants"

export const connectToDb = () => {
    MongoClient.connect(DATABASE_URI, (err, db) => {
        if (err) {
            throw err
        }
        console.log("Database created")
        db.close()
    })
}