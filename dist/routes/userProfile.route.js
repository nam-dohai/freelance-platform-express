"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileRoute = void 0;
const express_1 = require("express");
const userProfile_controller_1 = require("@/controllers/userProfile.controller");
const userProfile_dto_1 = require("@dtos/userProfile.dto");
const validation_middleware_1 = require("@middlewares/validation.middleware");
class UserProfileRoute {
    constructor() {
        this.path = '/users_profile';
        this.router = (0, express_1.Router)();
        this.userProfile = new userProfile_controller_1.UserProfileController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}/:id`, this.userProfile.getUserProfileById);
        this.router.post(`${this.path}`, (0, validation_middleware_1.ValidationMiddleware)(userProfile_dto_1.CreateUserProfileDto), this.userProfile.createUserProfile);
        this.router.put(`${this.path}/:id`, (0, validation_middleware_1.ValidationMiddleware)(userProfile_dto_1.UpdateUserProfileDto), this.userProfile.updateUserProfile);
        this.router.delete(`${this.path}/:id`, this.userProfile.deleteUserProfile);
    }
}
exports.UserProfileRoute = UserProfileRoute;
//# sourceMappingURL=userProfile.route.js.map