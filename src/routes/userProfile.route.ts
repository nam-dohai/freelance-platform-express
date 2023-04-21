import { Router } from 'express';
import { UserProfileController } from '@/controllers/userProfile.controller';
import { CreateUserProfileDto, UpdateUserProfileDto } from '@dtos/userProfile.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class UserProfileRoute implements Routes {
  public path = '/users_profile';
  public router = Router();
  public userProfile = new UserProfileController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/:id`, this.userProfile.getUserProfileById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateUserProfileDto), this.userProfile.createUserProfile);
    this.router.put(`${this.path}/:id`, ValidationMiddleware(UpdateUserProfileDto), this.userProfile.updateUserProfile);
    this.router.delete(`${this.path}/:id`, this.userProfile.deleteUserProfile);
  }
}
