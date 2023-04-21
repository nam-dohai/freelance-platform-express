"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileService = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const httpException_1 = require("@exceptions/httpException");
const userProfile_model_1 = require("@models/userProfile.model");
let UserProfileService = class UserProfileService {
    async findUserProfileById(userProfileId) {
        const findUserProfile = await userProfile_model_1.UserProfileModel.query().findById(userProfileId);
        if (!findUserProfile)
            throw new httpException_1.HttpException(409, "UserProfile Profile doesn't exist");
        return findUserProfile;
    }
    async createUserProfile(userProfileData) {
        // const findUserProfile: UserProfile = await UserProfileModel.query().select().from('users_profile').where('id', '=', userProfileData.id).first();
        const createUserData = await userProfile_model_1.UserProfileModel.query()
            .insert(Object.assign({}, userProfileData))
            .into('users_profile');
        return createUserData;
    }
    async updateUser(userProfileId, userProfileData) {
        const findUser = await userProfile_model_1.UserProfileModel.query().select().from('users_profile').where('id', '=', userProfileId);
        if (!findUser)
            throw new httpException_1.HttpException(409, "UserProfile doesn't exist");
        await userProfile_model_1.UserProfileModel.query()
            .update(Object.assign({}, userProfileData))
            .where('id', '=', userProfileId)
            .into('users_profile');
        const updateUserData = await userProfile_model_1.UserProfileModel.query().select().from('users_profile').where('id', '=', userProfileId).first();
        return updateUserData;
    }
    async deleteUser(userProfileId) {
        const findUser = await userProfile_model_1.UserProfileModel.query().select().from('users_profile').where('id', '=', userProfileId).first();
        if (!findUser)
            throw new httpException_1.HttpException(409, "UserProfile doesn't exist");
        await userProfile_model_1.UserProfileModel.query().delete().where('id', '=', userProfileId).into('users_profile');
        return findUser;
    }
};
UserProfileService = tslib_1.__decorate([
    (0, typedi_1.Service)()
], UserProfileService);
exports.UserProfileService = UserProfileService;
//# sourceMappingURL=userProfile.service.js.map