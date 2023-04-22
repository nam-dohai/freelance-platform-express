import { Model, ModelObject } from 'objection';
import { Offer } from '../interfaces/offers.interface';
import { UserProfileModel } from './userProfile.model';
import { ProjectModel } from './projects.model';

export class OfferModel extends Model implements Offer {
  id!: string;
  project_id: string;
  proponent_id: string;
  message: string;
  price: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  deleteAt: Date | null;

  static tableName = 'offers'; // database table name
  static idColumn = 'id'; // id column name

  static relationMappings = {
    project: {
      relation: Model.BelongsToOneRelation,
      modelClass: () => ProjectModel,
      join: {
        from: 'offers.project_id',
        to: 'projects.id',
      },
    },
    proponent: {
      relation: Model.BelongsToOneRelation,
      modelClass: () => UserProfileModel,
      join: {
        from: 'offers.proponent_id',
        to: 'users_profile.id',
      },
    },
  };
}

export type OfferShape = ModelObject<OfferModel>;
