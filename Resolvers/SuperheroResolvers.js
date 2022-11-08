const {readFile} =require('../Middleware/file')

module.exports={
    Query:{
        greetings:()=>{
            return "Welcome";
        }
    },
    Mutation:{
        singleUpload: async (_,{file})=>{
        const imageUrl=await readFile(file);
        console.log(imageUrl);

        return{
            message:imageUrl
        }
//now write to sql
// const singleFile=new 

        }
    }
}

/*
 Query: {
    uploads: (parent, args) => {},
  },
  Mutation: {
    singleUpload: (parent, args) => {
      return args.file.then(file => {
        //Contents of Upload scalar: https://github.com/jaydenseric/graphql-upload#class-graphqlupload
        //file.createReadStream() is a readable node stream that contains the contents of the uploaded file
        //node stream api: https://nodejs.org/api/stream.html
        return file;
      });
    },
  },

*/