import { Model, ModelObject } from 'objection';
import { Project } from '@interfaces/projects.interface';
import { UserProfileModel } from './userProfile.model';
import { PropositionModel } from './propositions.model';
import { OfferModel } from './offers.model';
import { ProjectMappingModel } from './projectsMapping.model';
import { ProjectCategoryModel } from './projectCategories.model';
export declare class ProjectModel extends Model implements Project {
    id: string;
    name: string;
    description: string;
    price: string;
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
    static tableName: string;
    static idColumn: string;
    static relationMappings: {
        author: {
            relation: import("objection").RelationType;
            modelClass: () => typeof UserProfileModel;
            join: {
                from: string;
                to: string;
            };
        };
        worker: {
            relation: import("objection").RelationType;
            modelClass: () => typeof UserProfileModel;
            join: {
                from: string;
                to: string;
            };
        };
        propositions: {
            relation: import("objection").RelationType;
            modelClass: () => typeof PropositionModel;
            join: {
                from: string;
                to: string;
            };
        };
        offers: {
            relation: import("objection").RelationType;
            modelClass: () => typeof OfferModel;
            join: {
                from: string;
                to: string;
            };
        };
        projects_mapping: {
            relation: import("objection").RelationType;
            modelClass: () => typeof ProjectMappingModel;
            join: {
                from: string;
                to: string;
            };
        };
        project_categories: {
            relation: import("objection").RelationType;
            modelClass: () => typeof ProjectCategoryModel;
            join: {
                from: string;
                through: {
                    from: string;
                    to: string;
                };
                to: string;
            };
        };
    };
}
export type ProjectShape = ModelObject<ProjectModel>;
