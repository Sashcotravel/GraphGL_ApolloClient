// import fs from "fs";
// import path from "path";
const { gql } = require('apollo-server')

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
        favoriteMovie: [Movie]
    }
    
    type Movie {
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheaters: Boolean!
    }

    type Query {
        users: UsersResult
        user(id: ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!
    }
    
    input CreateUserInput {
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = Canada
    }
    
    input UpdateUsernameInput {
        id: ID!
        username: String!
    }
    
    type Mutation {
        createUser(input: CreateUserInput!): User
        updateUsername(input: UpdateUsernameInput!): User
        deleteUser(id: ID!): User
    }
    
    enum Nationality {
        Canada
        Canada2
        Canada3
        Canada4
        Canada5
    }
    
    type UsersSuccessfulResult {
        users: [User!]!
    }
    
    type UsersErrorResult {
        message: String!
    }
    
    union UsersResult = UsersSuccessfulResult | UsersErrorResult
`

module.exports = { typeDefs }

// export const typeDefs = fs.readFileSync(
//     path.join(__dirname, 'schema.graphql'),
//     'utf8'
// )