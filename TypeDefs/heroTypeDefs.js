const { gql } = require('apollo-server-express');


module.exports = gql `

scalar Upload
type Hero {
    id: ID!
    name: String!
    powerstat: String!
    image: String!
    description: String!
}

type Query {
    getHerosList: [Hero!]
    getHero(id: ID!): Hero!
    getHerosByName(name: String!): [Hero!]
}

type Mutation {
    updateHero(id: ID! ,name: String!, powerstat: String!, image: String!, description: String!,file: Upload!): File!
    addHero(name:String!,powerstat:String!,image:String!,description: String!,file: Upload!): File!
    deleteHero(id: ID!): Boolean!
}


type File {
    filename: String!
    mimetype: String!
    encoding: String!
    id: ID!
    name: String!
    powerstat: String!
    image: String!
    description: String!
  }
  
`;