import { Model, ModelObject } from 'objection';
import { UserProfile } from '@interfaces/userProfile.interface';

export class UserProfileModel extends Model implements UserProfile {
  id!: string;
  name!: string;
  image_url!: string;
  title!: string;
  description!: string;
  portfolio!: string;
  user_id!: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  deleteAt: Date | null;

  static tableName = 'users_profile'; // database table name
  static idColumn = 'id'; // id column name
}

export type UserShape = ModelObject<UserProfileModel>;
