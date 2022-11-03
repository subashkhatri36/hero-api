const fs = require("fs");
import multer from 'multer';
import path from 'path';
import CustomErrorHandler from '../services/CustomErrorHandler';
const connectDB=require('../config/db.config');


const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}${path.extname(file.originalname)}`;
        
        cb(null, uniqueName);
    }

});

const handleMultipartData = multer({ storage, limits: { fileSize: 1000000 * 3 } }).single('image');


const superHeroController ={   
    
    
    async createSuperHero(req, res,next) {

    //multi -part from data
    handleMultipartData(req, res, async (err) => {
        if (err) {            
            return next(CustomErrorHandler.serverError(err.message));
        }

        const {
            name,powerstat,description
    
        } = req.body;
        const filePath = req.file.path;
        let result;
        if(name || powerstat || description){
            //complete file path
            //Changing file path

            let filterpath=__dirname.split('/');
            
            let repath="";
            for(let i=0;i<filterpath.length-1;i++){
                if(i===0)
                repath=filterpath[i];
                else
                    repath=repath+"/"+filterpath[i];
            }


        try {
            const query="Insert Into Heros (name,powerstat,image,description) values ('"+name+"','"+powerstat+"','"+(repath+"/"+filePath)+"','"+description+"');".toString();
          
            connectDB.query(query,(error,data)=>{
                if(error)
                return res.status(200).json({"message":error});

                return res.status(200).json({"message":"Successfully inserted.","id":data.insertId});
            });
            

        } catch (err) {
            return next(error);
        }

        }else{
            return next("All field are required.")
        }


    
});

        },

async updateSuperHero(req,res,next){
    handleMultipartData(req, res, async (err) => {
        if (err) {      
            console.log('first error');
            return next(CustomErrorHandler.serverError(err.message));
        }

        const {
            name,powerstat,description,id
    
        } = req.body;


        const filePath = req.file.path;



        console.log('Checking .....');
        
        if(name || powerstat || description){            

            let filterpath=__dirname.split('/');
            
            let repath="";
            for(let i=0;i<filterpath.length-1;i++){
                if(i===0)
                repath=filterpath[i];
                else
                    repath=repath+"/"+filterpath[i];
            }


        try {
            //removing old files
            connectDB.query(`select image from Heros where id =${id}`,(error,data)=>{
                if(error)
                return next(error);
    
                if(data.length>0){
                
                    fs.unlink(data[0]['image'],(err)=>{                   
                        
                    });
                   
                }    
                
            });


            //updating new files
            const query="Update Heros set name='"+name+"',powerstat='"+powerstat+"',image='"+(repath+"/"+filePath)+"',description='"+description+"' where id="+id+";".toString();
            console.log(query);
          
            connectDB.query(query,(error,data)=>{
                console.log('inside query');
                if(error)
                return res.status(500).json({"message":error});

                console.log(data);

                console.log('returning error...');
                return res.status(200).json({"message":"Successfully Updated.","id":data});
            });
            

        } catch (err) {
            console.log('try catch error');
            return next(err);
        }

        }else{
            console.log('Empty error');
            return next("All field are required.")
        }


    
});
},

        async search(req,res,next){
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
            
                    return res.status(200).json({            
                        "SuperHeros":searchData
                    });
                });
    

            }catch(err){
                return next(err);
            }
           
        },

        async searchBYID(req,res,next){
            try{
                var query="";
                if(req.params.id===null || req.params.id===undefined )
                    query="SELECT * FROM Heros;"
    
                query="SELECT * FROM Heros Where id="+req.params.id;
    
                const searchQuery= connectDB.query(query,(error,data)=>{
                    var searchData=data;
                    if(error)
                    throw error;
                    if(searchData===undefined)
                    searchData={"message":"No items found"};
            
                    return res.status(200).json({            
                        "SuperHero":searchData
                    });
                });
    

            }catch(err){
                return next(err);
            }
           

        },
        async deleteSuperHero(req,res,next){
            try{
                //removing old files
                connectDB.query(`select image from Heros where id =${req.params.id}`,(error,data)=>{
                    if(error)
                    return next(error);

                    if(data.length>0){
                    
                        fs.unlink(data[0]['image'],(err)=>{                   
                            
                        });
                    
                    }    
                    
                });
            }catch(error){
                return next(error);
            }
           
            var query="";
            

            query="delete from Heros Where id="+req.params.id;

            const searchQuery= connectDB.query(query,(error,data)=>{
                var searchData=data;
                if(error)
                throw error;
                if(searchData===undefined)
                searchData={"message":"No items found"};
        
                return res.status(200).json({            
                    "message":"Successfully deleted."
                });
            });

        },
}

export default superHeroController;