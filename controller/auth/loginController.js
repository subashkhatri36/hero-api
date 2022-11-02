import Joi from "joi";
import { User, RefreshToken } from "../../models";
import bcrypt from 'bcrypt';
import CustomErrorHandler from "../../services/CustomErrorHandler";
import { REFRESH_SECRET } from "../../config";

import JwtService from "../../services/JwtService";

const loginController = {
    async login(req, res, next) {
        const loginSchema = Joi.object({
            phoneno: Joi.string().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        });



        const { error } = loginSchema.validate(req.body);

        if (error) {
            return next(error);
        }
        let access_token;
        let refresh_token;
        try {
            const user = await User.findOne({ phoneno: req.body.phoneno });
            if (!user) {
                return next(CustomErrorHandler.wrongCridentials());
            }

            //compare password
            const match = await bcrypt.compare(req.body.password, user.password);
            if (!match) {
                next(CustomErrorHandler.wrongCridentials());
            }


            //token generated
            access_token = JwtService.sign({ '_id': user._id, role: user.role });
            refresh_token = JwtService.sign({ '_id': user._id, role: user.role }, '1y', REFRESH_SECRET);
            await RefreshToken.create({ token: refresh_token, user });



        } catch (err) {
            return next(err);

        }

        return res.status(200).json({ access_token, refresh_token });




    },

}
export default loginController;