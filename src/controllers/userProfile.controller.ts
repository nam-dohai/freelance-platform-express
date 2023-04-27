import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { UserProfile } from '../interfaces/userProfile.interface';
import { UserProfileService } from '../services/userProfile.service';

export class UserProfileController {
  public userProfile = Container.get(UserProfileService);

  public getUserProfileById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userProfileId = req.params.id;
      const findUserProfileData: UserProfile = await this.userProfile.findUserProfileById(userProfileId);

      res.status(200).json({ data: findUserProfileData });
    } catch (error) {
      next(error);
    }
  };

  public getUserProfileByUserId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.query.id as string;
      const findUserProfileData: UserProfile = await this.userProfile.findUserProfileByUserId(userId);

      res.status(200).json({ data: findUserProfileData });
    } catch (error) {
      next(error);
    }
  };

  public createUserProfile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userProfileData: UserProfile = req.body;
      const createUserData: UserProfile = await this.userProfile.createUserProfile(userProfileData);

      res.status(201).json({ data: createUserData });
    } catch (error) {
      next(error);
    }
  };

  public updateUserProfile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userProfileId = req.params.id;
      const userProfileData: UserProfile = req.body;
      const updateUserData: UserProfile = await this.userProfile.updateUser(userProfileId, userProfileData);

      res.status(200).json({ data: updateUserData });
    } catch (error) {
      next(error);
    }
  };

  public deleteUserProfile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userProfileId = req.params.id;
      const deleteUserProfileData: UserProfile = await this.userProfile.deleteUser(userProfileId);

      res.status(200).json({ data: deleteUserProfileData });
    } catch (error) {
      next(error);
    }
  };
}
