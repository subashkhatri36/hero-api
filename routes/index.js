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
    const query= con.query("select * from Heros;");

    return res.status(200).json({
        "Message":"App is working fine.",
        "App Directory" : appDir,
        "query Data":query
    });
})

export default router;