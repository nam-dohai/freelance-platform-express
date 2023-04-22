import { UserProfileController } from '../controllers/userProfile.controller';
import { Routes } from '../interfaces/routes.interface';
export declare class UserProfileRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    userProfile: UserProfileController;
    constructor();
    private initializeRoutes;
}
