const SuperHero=require('../Model/superHeroModel');
const fs=require('fs');
const {createWriteStream} =require('fs');
const { GraphQLUpload } = require('graphql-upload-minimal');
const path=require('path');


module.exports = {
    Upload: GraphQLUpload,
    Query: {

        getHerosList: async (parent, args) => {
            
            const result = await SuperHero.findAll();
            if(result===null){
                return {message:"No data found"};
            }
               
        
            return result;

        },
        getHero: async (parent, args) => {
            
            const result = await SuperHero.findByPk(args.id);
            
            if(result===null){
                return {message:"No data found"};
            }
        
            return result;

        },
        getHerosByName: async (parent, args) => {
            
            const result = await SuperHero.findOne({ where: { name: args.name } });
            if(result===null){
                return {message:"No data found"};
            }
        
            return result;

        }
    },

    Mutation: {
        updateHero: async (parent, args) => { 
            
            try {
                //find 
                const result = await SuperHero.findByPk(args.id);
                

                if(result){
                     //remove old image
                    console.log(result.dataValues.image);
                     fs.unlink(result.dataValues.image, (err) => {
                        if (err) throw err;
                        console.log('test1.txt was deleted');
                      });

                   
                }
                // result.dataValues.image

               
                
                return args.file.then(async(file)=>{
                    const { createReadStream,filename}=await file;
                    const stream=createReadStream();
                    const namesep=filename.split('.');
                   
                    let url=path.join(__dirname,`../Upload/${Math.floor((Math.random()*1000)+1)}${namesep[0]}.${namesep[1]}`);
                    const imageStream=await createWriteStream(url);
                    await stream.pipe(imageStream);
                    
                    const result = await SuperHero.create
                         ({
                            name: args.name,
                            powerstat: args.powerstat,
                            image: url,
                            description: args.description
                     } ,{
                        where: { id: args.id },
                      }
                     );                   
                     

                    return file;
                });
           
              } catch {
                return {message:"Error while uploading data."}
              }


            const result = await SuperHero.update
            (
                {
                    name: args.name,
                    powerstat: args.powerstat,
                    image: args.image,
                    description: args.description
                },
                {
                    where: { id: args.id },
                  })
            return result;
        },
        deleteHero:  async (parent, args) => {
            try {
                //find 
                const result = await SuperHero.findByPk(args.id);
                

               
                
               await SuperHero.destroy({
                    where: { id: args.id },
                  }).then((value)=>{
                    if(result){
                        //remove old image
   
                        fs.unlink(path.join(__dirname, path.basename(result.dataValues.image), (err) => {
                           if (err) throw err;
                           console.log('test1.txt was deleted');
                         }));
   
                      
                   }
                  });
                                   
               
                return true;
            } catch (error) {
                console.log('Error while delete:',error);
                return false;
            }
            
        },
        
        addHero: async (root, args ) => {
            
            try {
                
                return args.file.then(async(file)=>{
                    const { createReadStream,filename}=await file;
                    const stream=createReadStream();
                    const namesep=filename.split('.');
                   
                    let url=path.join(__dirname,`../Upload/${Math.floor((Math.random()*1000)+1)}${namesep[0]}.${namesep[1]}`);
                    const imageStream=await createWriteStream(url);
                    await stream.pipe(imageStream);
                    
                    const result = await SuperHero.create
                         ({
                            name: args.name,
                            powerstat: args.powerstat,
                            image: url,
                            description: args.description
                     });
                     
                     

                    return file;
                });
           
              } catch {
                return {message:"Error while uploading data."}
              }
           }
          
    }
}
