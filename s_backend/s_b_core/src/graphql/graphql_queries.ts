import { buildSchema } from "graphql"
import { createUserToken } from "../mvc/controllers/GetStreamController"

// TODO: https://medium.com/@MichalLytek/graphql-typescript-typegraphql-ba0225cb4bed

// Resolver functions
export const graphqlRoot = {
    getStreamToken: (userId:string): string => {
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
