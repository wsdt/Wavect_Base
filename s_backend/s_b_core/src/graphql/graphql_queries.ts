import { buildSchema } from "graphql"
import {createUserToken} from "../mvc/controllers/GetStreamController"

// Resolver functions
export const graphqlRoot = {
    getStreamToken: ({userId}):string => {
        return createUserToken(userId)
    },
}

// Schema, Routes, Queries
export const graphqlSchema = buildSchema(
    `
        type Query {
            getStreamToken(userId: String!): String
        }
    `
)
