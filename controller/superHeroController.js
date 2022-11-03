const fs = require("fs");

const {db,connectDB}=require('../config/db.config');

const SuperHeroModel=db.SuperHero;



const superHeroController ={   
    
    
    async createSuperHero(req, res,next) {
        try {
            console.log(req.file);

            if (req.file == undefined) {
            return res.send(`You must select a file.`);
            }

            SuperHeroModel.create({
                name:req.name,
                powerstat: req.powerstat,
                description: req.description,
                image:fs.readFileSync(
                    __basedir + "uploads/" + req.file.filename
                )
            }).then((image) => {
                fs.writeFileSync(
                __basedir + "/uploads/tmp/" + image.name,
                image.data
                );
                return res.json({"message":"File Saved"});
            });

        
        } catch (error) {
            console.log(error);
            return res.send(`Error when trying upload images: ${error}`);
        }
            return res.status(200).json({
                "Message ":"Saved"
            });


        },
        async search(req,res,next){
            console.log("Here comes data");
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

        }
}

export default superHeroController;