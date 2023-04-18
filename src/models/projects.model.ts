import { Model, ModelObject } from 'objection';
import { Project } from '@interfaces/projects.interface';
import { UserProfileModel } from './userProfile.model';
import { PropositionModel } from './propositions.model';
import { OfferModel } from './offers.model';
import { ProjectMappingModel } from './projectsMapping.model';
import { ProjectCategoryModel } from './projectCategories.model';

export class ProjectModel extends Model implements Project {
  id!: string;
  name!: string;
  description!: string;
  price!: string;
  author_id: string;
  worker_id: string | null;
  status: string;
  tags: Array<{}>;
  propositions: Array<{}>;
  offers: Array<{}>;
  author: UserProfileModel;
  worker: UserProfileModel;
  createdAt: Date | null;
  updatedAt: Date | null;
  deleteAt: Date | null;

  static tableName = 'projects'; // database table name
  static idColumn = 'id'; // id column name

  static relationMappings = {
    author: {
      relation: Model.BelongsToOneRelation,
      modelClass: () => UserProfileModel,
      join: {
        from: 'projects.author_id',
        to: 'users_profile.id',
      },
    },
    worker: {
      relation: Model.BelongsToOneRelation,
      modelClass: () => UserProfileModel,
      join: {
        from: 'projects.worker_id',
        to: 'users_profile.id',
      },
    },
    propositions: {
      relation: Model.HasManyRelation,
      modelClass: () => PropositionModel,
      join: {
        from: 'projects.id',
        to: 'propositions.project_id',
      },
    },
    offers: {
      relation: Model.HasManyRelation,
      modelClass: () => OfferModel,
      join: {
        from: 'projects.id',
        to: 'offers.project_id',
      },
    },
    projects_mapping: {
      relation: Model.HasManyRelation,
      modelClass: () => ProjectMappingModel,
      join: {
        from: 'projects.id',
        to: 'projects_mapping.project_id',
      },
    },
    project_categories: {
      relation: Model.ManyToManyRelation,
      modelClass: () => ProjectCategoryModel,
      join: {
        from: 'projects.id',
        through: {
          from: 'projects_mapping.project_id',
          to: 'projects_mapping.project_category_id',
        },
        to: 'project_categories.id',
      },
    },
  };
}

export type ProjectShape = ModelObject<ProjectModel>;
