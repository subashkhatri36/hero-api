import Joi from "joi";
import CustomErrorHandler from "../../services/CustomErrorHandler";
import { RefreshToken, User } from "../../models";
import bcrypt from 'bcrypt';
import JwtService from "../../services/JwtService";
import { REFRESH_SECRET } from "../../config";


const registerController = {
    async register(req, res, next) {
        //validata 

        const registerShcema = Joi.object({
            phoneno: Joi.string(),
            email: Joi.string(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
            repassword: Joi.ref('password'),
            lastlogin: Joi.date(),
            loginType: Joi.string(),
            role: Joi.string().required(),
            isActive: Joi.bool(),
            accountcreatedfor: Joi.string().required(),
        });


        const { error } = registerShcema.validate(req.body);

        if (error) {


            return next(error);

        }
        const { loginType } = req.body;
        let existEmail = false;

        //email already exist or not
        try {
            //check if loginType
            if (loginType === "phone") {
                const exist = await User.exists({ phoneno: req.body.phoneno });
                if (exist) {
                    return next(CustomErrorHandler.alreadyExist('This phone number already exist.'));
                }

            } else {
                //for email
                const exist = await User.exists({ email: req.body.email });
                if (exist) {
                    existEmail = true;
                }
            }
        } catch (err) {
            return next(err);

        }
        //prepare the model
        const { phoneno, email, accountcreatedfor, password, isActive, lastlogin, role } = req.body;

        let user;
        if (loginType === "phone") {
            //haspassword
            const hashedpassword = await bcrypt.hash(password, 10);
            user =
                new User({
                    phoneno,
                    accountcreatedfor,
                    password: hashedpassword,
                    email: '',
                    isActive,
                    loginType,
                    lastlogin,
                    role
                });

        } else {
            //email social login
            user =
                new User({
                    phoneno: '',
                    accountcreatedfor,
                    password: '',
                    email: email,
                    isActive,
                    loginType,
                    lastlogin,
                    role
                });
        }

        let access_token;
        let refresh_token;
        //ssave into database
        try {
            let result;
            if (loginType === "phone") {
                result = await user.save();
            } else {
                if (!existEmail) {
                    result = await user.save();
                }
                else {
                    result = await User.findOne({ email: email })
                }

            }
            ///return token to client

            access_token = JwtService.sign({ '_id': result._id, role: result.role },);


            refresh_token = JwtService.sign({ '_id': result._id, role: result.role }, '1y', REFRESH_SECRET);
            await RefreshToken.create({ token: refresh_token });



        } catch (err) {
            console.log("error is here");
            return next(err);

        }
        res.status(201).json({ access_token, refresh_token, user });
    },
    async showAlluser(req, res, next) {

    },
    async deactiveAccount(req, res, next) {

    },
    async deleteAccount(req, res, next) {

    },
    async updateAccount(req, res, next) {

    },
    async updatelogintime(req, res, next) {

    }

}

export default registerController;