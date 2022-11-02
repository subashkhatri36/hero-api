import express from 'express';
import { con } from '../config/db.config';

// import auth from '../middlewares/auth';


const router = express.Router();

//npm run dev
// router.post('/register', registerController.register);
// router.post('/social', registerController.register);
// router.post('/refreshtoken', refreshController.refresh);
// router.post('/login', loginController.login);
// router.post('/logout', auth, logoutController.logout);

router.get('/',(req,res,next)=>{
    const appDir=process.env.appDir;
    const query= con.query("select * from Heros;",(error,data)=>{
        if(error)
        throw error;

        return res.status(200).json({
            
            "SuperHeros":data
        });
    });

   
})

export default router;