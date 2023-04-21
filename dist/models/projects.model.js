"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectModel = void 0;
const objection_1 = require("objection");
const userProfile_model_1 = require("./userProfile.model");
const propositions_model_1 = require("./propositions.model");
const offers_model_1 = require("./offers.model");
const projectsMapping_model_1 = require("./projectsMapping.model");
const projectCategories_model_1 = require("./projectCategories.model");
class ProjectModel extends objection_1.Model {
}
exports.ProjectModel = ProjectModel;
ProjectModel.tableName = 'projects'; // database table name
ProjectModel.idColumn = 'id'; // id column name
ProjectModel.relationMappings = {
    author: {
        relation: objection_1.Model.BelongsToOneRelation,
        modelClass: () => userProfile_model_1.UserProfileModel,
        join: {
            from: 'projects.author_id',
            to: 'users_profile.id',
        },
    },
    worker: {
        relation: objection_1.Model.BelongsToOneRelation,
        modelClass: () => userProfile_model_1.UserProfileModel,
        join: {
            from: 'projects.worker_id',
            to: 'users_profile.id',
        },
    },
    propositions: {
        relation: objection_1.Model.HasManyRelation,
        modelClass: () => propositions_model_1.PropositionModel,
        join: {
            from: 'projects.id',
            to: 'propositions.project_id',
        },
    },
    offers: {
        relation: objection_1.Model.HasManyRelation,
        modelClass: () => offers_model_1.OfferModel,
        join: {
            from: 'projects.id',
            to: 'offers.project_id',
        },
    },
    projects_mapping: {
        relation: objection_1.Model.HasManyRelation,
        modelClass: () => projectsMapping_model_1.ProjectMappingModel,
        join: {
            from: 'projects.id',
            to: 'projects_mapping.project_id',
        },
    },
    project_categories: {
        relation: objection_1.Model.ManyToManyRelation,
        modelClass: () => projectCategories_model_1.ProjectCategoryModel,
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
//# sourceMappingURL=projects.model.js.map