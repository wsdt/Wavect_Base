import {buildSchema} from "graphql"

// Resolver functions
export const graphqlRoot = {
    hello: () => {
        return "Hello World"
    }
}

// Schema, Routes, Queries
export const graphqlSchema = buildSchema(
    `
        type Query {
            hello: String
        }
    `
)