"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const tslib_1 = require("tslib");
const bcrypt_1 = require("bcrypt");
const typedi_1 = require("typedi");
const httpException_1 = require("@exceptions/httpException");
const users_model_1 = require("@models/users.model");
let UserService = class UserService {
    async findAllUser() {
        const users = await users_model_1.UserModel.query().select().from('users');
        return users;
    }
    async findUserById(userId) {
        const findUser = await users_model_1.UserModel.query().findById(userId);
        if (!findUser)
            throw new httpException_1.HttpException(409, "User doesn't exist");
        return findUser;
    }
    async createUser(userData) {
        const findUser = await users_model_1.UserModel.query().select().from('users').where('email', '=', userData.email).first();
        if (findUser)
            throw new httpException_1.HttpException(409, `This email ${userData.email} already exists`);
        const hashedPassword = await (0, bcrypt_1.hash)(userData.password, 10);
        const createUserData = await users_model_1.UserModel.query()
            .insert(Object.assign(Object.assign({}, userData), { password: hashedPassword }))
            .into('users');
        return createUserData;
    }
    async updateUser(userId, userData) {
        const findUser = await users_model_1.UserModel.query().select().from('users').where('id', '=', userId);
        if (!findUser)
            throw new httpException_1.HttpException(409, "User doesn't exist");
        const hashedPassword = await (0, bcrypt_1.hash)(userData.password, 10);
        await users_model_1.UserModel.query()
            .update(Object.assign(Object.assign({}, userData), { password: hashedPassword }))
            .where('id', '=', userId)
            .into('users');
        const updateUserData = await users_model_1.UserModel.query().select().from('users').where('id', '=', userId).first();
        return updateUserData;
    }
    async deleteUser(userId) {
        const findUser = await users_model_1.UserModel.query().select().from('users').where('id', '=', userId).first();
        if (!findUser)
            throw new httpException_1.HttpException(409, "User doesn't exist");
        await users_model_1.UserModel.query().delete().where('id', '=', userId).into('users');
        return findUser;
    }
};
UserService = tslib_1.__decorate([
    (0, typedi_1.Service)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=users.service.js.map