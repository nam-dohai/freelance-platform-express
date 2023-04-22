import { CreateUserProfileDto } from '../dtos/userProfile.dto';
import { UserProfile } from '../interfaces/userProfile.interface';
export declare class UserProfileService {
    findUserProfileById(userProfileId: string): Promise<UserProfile>;
    createUserProfile(userProfileData: CreateUserProfileDto): Promise<UserProfile>;
    updateUser(userProfileId: string, userProfileData: UserProfile): Promise<UserProfile>;
    deleteUser(userProfileId: string): Promise<UserProfile>;
}
