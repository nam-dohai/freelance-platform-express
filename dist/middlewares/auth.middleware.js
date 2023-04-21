"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const _config_1 = require("@config");
const httpException_1 = require("@exceptions/httpException");
const users_model_1 = require("@models/users.model");
const getAuthorization = req => {
    const coockie = req.cookies['Authorization'];
    if (coockie)
        return coockie;
    const header = req.header('Authorization');
    if (header)
        return header.split('Bearer ')[1];
    return null;
};
const AuthMiddleware = async (req, res, next) => {
    try {
        const Authorization = getAuthorization(req);
        if (Authorization) {
            const verificationResponse = (await (0, jsonwebtoken_1.verify)(Authorization, _config_1.SECRET_KEY));
            const { id } = verificationResponse;
            const findUser = await users_model_1.UserModel.query().findById(id);
            if (findUser) {
                req.user = findUser;
                next();
            }
            else {
                next(new httpException_1.HttpException(401, 'Wrong authentication token'));
            }
        }
        else {
            next(new httpException_1.HttpException(404, 'Authentication token missing'));
        }
    }
    catch (error) {
        next(new httpException_1.HttpException(401, 'Wrong authentication token'));
    }
};
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=auth.middleware.js.map