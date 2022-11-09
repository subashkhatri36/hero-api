const {gql}=require('apollo-server-express');

module.exports=gql`
scalar Upload

extend type Query{
    greetings: String
}

type File {
    id: ID!
    path: String!
    filename: String!
    mimetype: String!
    encoding: String!
  }
  type Mutation {
    uploadSingleFile(file: Upload!): File!
  }

`;