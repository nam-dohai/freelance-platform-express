import { Service } from 'typedi';
import { CreateUserProfileDto } from '../dtos/userProfile.dto';
import { HttpException } from '../exceptions/httpException';
import { UserProfile } from '../interfaces/userProfile.interface';
import { UserProfileModel } from '../models/userProfile.model';

@Service()
export class UserProfileService {
  public async findUserProfileById(userProfileId: string): Promise<UserProfile> {
    const findUserProfile: UserProfile = await UserProfileModel.query().findById(userProfileId);
    if (!findUserProfile) throw new HttpException(409, "UserProfile Profile doesn't exist");

    return findUserProfile;
  }

  public async findUserProfileByUserId(userId: string): Promise<UserProfile> {
    const findUserProfile: UserProfile = await UserProfileModel.query().where('user_id', '=', userId).first();
    if (!findUserProfile) throw new HttpException(409, "UserProfile Profile doesn't exist");

    return findUserProfile;
  }

  public async createUserProfile(userProfileData: CreateUserProfileDto): Promise<UserProfile> {
    // const findUserProfile: UserProfile = await UserProfileModel.query().select().from('users_profile').where('id', '=', userProfileData.id).first();

    const createUserData: UserProfile = await UserProfileModel.query()
      .insert({ ...userProfileData })
      .into('users_profile');

    return createUserData;
  }

  public async updateUser(userProfileId: string, userProfileData: UserProfile): Promise<UserProfile> {
    const findUser: UserProfile[] = await UserProfileModel.query().select().from('users_profile').where('id', '=', userProfileId);
    if (!findUser) throw new HttpException(409, "UserProfile doesn't exist");

    await UserProfileModel.query()
      .update({ ...userProfileData })
      .where('id', '=', userProfileId)
      .into('users_profile');

    const updateUserData: UserProfile = await UserProfileModel.query().select().from('users_profile').where('id', '=', userProfileId).first();
    return updateUserData;
  }

  public async deleteUser(userProfileId: string): Promise<UserProfile> {
    const findUser: UserProfile = await UserProfileModel.query().select().from('users_profile').where('id', '=', userProfileId).first();
    if (!findUser) throw new HttpException(409, "UserProfile doesn't exist");

    await UserProfileModel.query().delete().where('id', '=', userProfileId).into('users_profile');
    return findUser;
  }
}
