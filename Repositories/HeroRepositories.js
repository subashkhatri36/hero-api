const fs = require("fs");
// import path from 'path';
import CustomErrorHandler from '../services/CustomErrorHandler';
const connectDB=require('../config/db.config');


// const storage = multer.diskStorage({
//     destination: (req, file, cb) => cb(null, 'uploads/'),
//     filename: (req, file, cb) => {
//         const uniqueName = `${Date.now()}${path.extname(file.originalname)}`;
        
//         cb(null, uniqueName);
//     }

// });

// const handleMultipartData = multer({ storage, limits: { fileSize: 1000000 * 3 } }).single('image');


const superHeroRepository ={   
    
    
    async createSuperHero(args) {

        const {
            name,powerstat,description,image
        } = args;

        try {
            const query="Insert Into Heros (name,powerstat,image,description) values ('"+name+"','"+powerstat+"','"+Image+"','"+description+"');".toString();
          
            connectDB.query(query,(error,data)=>{
                if(error)
                return {"message":error};

                return data;
            });
            

        } catch (err) {
            return {"message":err};
        }
     



        },
        async displayAll() {
    
            try {
                const query="Select name,powerstat,image,description from Heros";
              
                connectDB.query(query,(error,data)=>{
                    if(error)
                    return {"message":error};
    
                    return data;
                });
                
    
            } catch (err) {
                return {"message":err};
            }
         
            },

async updateSuperHero(args){

    const  { name,powerstat,description,image
} = args;

try {
    const query="Update Heros set name='"+name+"',powerstat='"+powerstat+"',image='"+(repath+"/"+filePath)+"',description='"+description+"' where id="+id+";".toString();
  
    connectDB.query(query,(error,data)=>{
        if(error)
        return {"message":error};

        return data
    });
    

} catch (err) {
    return {"message":err};
}
},

        async search(){
            try{
                var query="";
                if(req.body.name===null || req.body.name===undefined )
                    query="SELECT * FROM Heros;"
    
                query="SELECT * FROM Heros Where name Like '%"+req.body.name+"%'";
    
                const searchQuery= connectDB.query(query,(error,data)=>{
                    var searchData=data;
                    if(error)
                    throw error;
                    if(searchData===undefined)
                    searchData={"message":"No items found"};
            
                    return            
                        searchData
                    ;
                });
    

            }catch(err){
                return {"message":err};
            }
           
        },

        async searchBYID(id){
            try{
               
    
                query="SELECT * FROM Heros Where id="+id;
    
                const searchQuery= connectDB.query(query,(error,data)=>{
                    var searchData=data;
                    if(error)
                    throw error;
                    if(searchData===undefined)
                    searchData={"message":"No items found"};
            
                    return  searchData;
                });
    

            }catch(err){
                return {"message":err};
            }
           

        },
        async deleteSuperHero(id){
            try{            
            

            query="delete from Heros Where id="+id;

            const searchQuery= connectDB.query(query,(error,data)=>{
                var searchData=data;
                if(error)
                throw error;
                if(searchData===undefined)
                searchData={"message":"No items found"};
        
                return          
                   searchData;
                });
            }catch(error){
                return {"message":error};
            }
            

        },
}

export default superHeroController;