const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const HeroType = new GraphQLObjectType({
  name: "Heros",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    powerstat: { type: GraphQLString },
    image: { type: GraphQLString },
    description: { type: GraphQLString },
 }),
});

module.exports = HeroType;