"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const typedi_1 = require("typedi");
const auth_service_1 = require("../services/auth.service");
class AuthController {
    constructor() {
        this.auth = typedi_1.Container.get(auth_service_1.AuthService);
        this.signUp = async (req, res, next) => {
            try {
                const userData = req.body;
                const signUpUserData = await this.auth.signup(userData);
                res.status(201).json({ data: signUpUserData, message: 'signup' });
            }
            catch (error) {
                next(error);
            }
        };
        this.logIn = async (req, res, next) => {
            try {
                const userData = req.body;
                const { cookie, findUser, tokenData } = await this.auth.login(userData);
                res.setHeader('Set-Cookie', [cookie]);
                res.status(200).json({ tokenData, message: 'login' });
            }
            catch (error) {
                next(error);
            }
        };
        this.logOut = async (req, res, next) => {
            try {
                const userData = req.user;
                const logOutUserData = await this.auth.logout(userData);
                res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
                res.status(200).json({ data: logOutUserData, message: 'logout' });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map