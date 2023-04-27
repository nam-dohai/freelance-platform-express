"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileController = void 0;
const typedi_1 = require("typedi");
const userProfile_service_1 = require("../services/userProfile.service");
class UserProfileController {
    constructor() {
        this.userProfile = typedi_1.Container.get(userProfile_service_1.UserProfileService);
        this.getUserProfileById = async (req, res, next) => {
            try {
                const userProfileId = req.params.id;
                const findUserProfileData = await this.userProfile.findUserProfileById(userProfileId);
                res.status(200).json({ data: findUserProfileData });
            }
            catch (error) {
                next(error);
            }
        };
        this.getUserProfileByUserId = async (req, res, next) => {
            try {
                const userId = req.query.id;
                const findUserProfileData = await this.userProfile.findUserProfileByUserId(userId);
                res.status(200).json({ data: findUserProfileData });
            }
            catch (error) {
                next(error);
            }
        };
        this.createUserProfile = async (req, res, next) => {
            try {
                const userProfileData = req.body;
                const createUserData = await this.userProfile.createUserProfile(userProfileData);
                res.status(201).json({ data: createUserData });
            }
            catch (error) {
                next(error);
            }
        };
        this.updateUserProfile = async (req, res, next) => {
            try {
                const userProfileId = req.params.id;
                const userProfileData = req.body;
                const updateUserData = await this.userProfile.updateUser(userProfileId, userProfileData);
                res.status(200).json({ data: updateUserData });
            }
            catch (error) {
                next(error);
            }
        };
        this.deleteUserProfile = async (req, res, next) => {
            try {
                const userProfileId = req.params.id;
                const deleteUserProfileData = await this.userProfile.deleteUser(userProfileId);
                res.status(200).json({ data: deleteUserProfileData });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.UserProfileController = UserProfileController;
//# sourceMappingURL=userProfile.controller.js.map