const {gql} =require('apollo-server-express');


const typeDefs=gql`
scalar Upload
type File {
  filename: String!
  mimetype: String!
  encoding: String!
}
  type Query {
    greetings: String!
  }
  type Mutation {
  singleUpload(file: Upload!): File!
    
  }
`;

module.exports =[
    typeDefs
    
];