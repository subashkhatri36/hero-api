import { RefreshToken } from "../../models";
import Joi from "joi";

const logoutController = {
    async logout(req, res, next) {
        const refreshSchema = Joi.object({
            refresh_token: Joi.string().required(),

        });



        const { error } = refreshSchema.validate(req.body);

        if (error) {
            return next(error);
        }

        try {
            await RefreshToken.deleteOne({ token: req.body.refresh_token });

        } catch (err) {
            return next(new Error('Something went wrong ' + err.message));
        }

        res.status(200).json({ msg: 'Logout' });
    }
}
export default logoutController;