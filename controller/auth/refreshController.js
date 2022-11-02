import Joi from "joi";
import { REFRESH_SECRET } from "../../config";
import { RefreshToken, User } from "../../models";
import CustomErrorHandler from "../../services/CustomErrorHandler";
import JwtService from "../../services/JwtService";

const refreshController = {
    async refresh(req, res, next) {
        //req validate

        const refreshSchema = Joi.object({
            refresh_token: Joi.string().required(),

        });

        const { error } = refreshSchema.validate(req.body);

        if (error) {
            return next(error);
        }
        let refreshtoken;
        //database check
        try {
            refreshtoken = await RefreshToken.findOne({ token: req.body.refresh_token });

            if (!refreshtoken) {
                return next(CustomErrorHandler.unAuthorized('Invalid refresh token'));
            }


            let userId;
            let roleId
            try {
                const { _id, role } = await JwtService.verify(refreshtoken.token, REFRESH_SECRET);
                userId = _id;
                roleId = role;



            } catch (err) {
                return next(new Error('Invalid refresh token'));
            }


            const user = await User.findOne({ _id: userId, isActive: true, role: roleId });



            if (!user) {
                return next(CustomErrorHandler.unAuthorized('No user found!'));
            }



            //token generated
            const access_token = JwtService.sign({ _id: user._id, role: user.role });

            //   const new_token = JwtService.sign({ _id: user._id, role: user.role }, '1y', REFRESH_SECRET);


            //  await RefreshToken.create({ token: new_token });
            const new_token = req.body.refresh_token;


            return res.status(200).json({ access_token, new_token });

        } catch (err) {
            return next(new Error('Something went Wrong ' + err.message));
        }

    }
}
export default refreshController;

