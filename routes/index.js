import express from 'express';
import { connectDB } from '../config/db.config';
import uploadFile from '../middlewares/upload';
import { superHeroController } from '../controller';

// import auth from '../middlewares/auth';


const router = express.Router();


router.get('/',(req,res,next)=>{
    const query= connectDB.query("select * from Heros;",(error,data)=>{
        if(error)
        throw error;

        return res.status(200).json({            
            "SuperHeros":data
        });
    });
});

router.post('/search',superHeroController.search);



    router.post('/create', uploadFile.single("file"), superHeroController.createSuperHero);



export default router;