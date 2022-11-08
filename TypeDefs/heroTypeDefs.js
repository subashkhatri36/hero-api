const { gql } = require('apollo-server-express');


module.exports = gql `
type Hero {
    id: ID
    name: String!
    powerstat: String!
    image: String!
    description: String!
}

type Query {
    getHerosList: [Hero]
    getHero(id: ID!): Hero
    getHerosByName(name: String!): Hero
}

type Mutation {
    updateHero(id: ID! ,name: String!, powerstat: String!, image: String!, description: String!): Hero
    addHero(name: String!, powerstat: String!, image: String!, description: String!): Hero
    deleteHero(id: ID!): Boolean!
} `;
