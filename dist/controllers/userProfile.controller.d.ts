import { NextFunction, Request, Response } from 'express';
import { UserProfileService } from '../services/userProfile.service';
export declare class UserProfileController {
    userProfile: UserProfileService;
    getUserProfileById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createUserProfile: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateUserProfile: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteUserProfile: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
