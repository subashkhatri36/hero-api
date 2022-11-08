const heroResolver=require('../SuperheroResolvers');
const GraphQLUpload=require("graphql-upload-minimal");

const customResolvers={
    Upload:GraphQLUpload
}

module.exports=[
    customResolvers,
    heroResolver
]