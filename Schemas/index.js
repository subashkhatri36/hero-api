import { graphql, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import superHeroController from "../Repositories/HeroRepositories";


const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;


const HeroType = require("./TypeDefs/HeroType");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: {
      type: new GraphQLList(HeroType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return superHeroController.displayAll();
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: HeroType,
      args: {
        name: { type: GraphQLString },
        powerstat: { type: GraphQLString },
        image: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve(parent, args) {
        // userData.push({
        //   id: userData.length + 1,
        //   firstName: args.firstName,
        //   lastName: args.lastName,
        //   email: args.email,
        //   password: args.password,
        // });
        return args;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });