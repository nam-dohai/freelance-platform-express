import { Model, ModelObject } from 'objection';
import { Proposition } from '@interfaces/propositions.interface';
import { UserProfileModel } from './userProfile.model';
import { ProjectModel } from './projects.model';

export class PropositionModel extends Model implements Proposition {
  id!: string;
  project_id: string;
  proponent_id: string;
  message: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  deleteAt: Date | null;

  static tableName = 'propositions'; // database table name
  static idColumn = 'id'; // id column name

  static relationMappings = {
    project: {
      relation: Model.BelongsToOneRelation,
      modelClass: () => ProjectModel,
      join: {
        from: 'propositions.project_id',
        to: 'projects.id',
      },
    },
    proponent: {
      relation: Model.BelongsToOneRelation,
      modelClass: () => UserProfileModel,
      join: {
        from: 'propositions.proponent_id',
        to: 'users_profile.id',
      },
    },
  };
}

export type PropositionShape = ModelObject<PropositionModel>;
