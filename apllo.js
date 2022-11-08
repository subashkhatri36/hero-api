const {ApolloServer}=require('apollo-server-express');

const resolvers=require('./Resolvers/heroResolver');
const typeDefs=require('./TypeDefs/heroTypeDefs');

const  apolloServer=new ApolloServer({
    typeDefs,
    resolvers
})

module.exports=apolloServer;