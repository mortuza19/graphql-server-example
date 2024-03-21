export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game
        author: Author
    }
    type Author {
        id: ID!,
        name: String!,
        verified: Boolean!,
        reviews: [Review!]
    }
    type Query {
        reviews: [Review]
        review(id: ID!): Review

        games: [Game]
        game(id: ID!): Game

        authors: [Author]
        author(id: ID!): Author
    }

    type Mutation {
        deleteGame( id: ID! ): [Game]
        addGame( game: InputGameType ): Game
        updateGame( id: ID!, game: InputGameType ): [Game]
    }

    input InputGameType {
        title: String!
        platform: [String!]!
    }

`;// a type ending with ! is a required field
// Int, Float, String, Boolean, ID ( key for date object )
// first we need to create typeDef for data and then for query
