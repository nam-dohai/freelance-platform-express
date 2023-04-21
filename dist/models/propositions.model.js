"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropositionModel = void 0;
const objection_1 = require("objection");
const userProfile_model_1 = require("./userProfile.model");
const projects_model_1 = require("./projects.model");
class PropositionModel extends objection_1.Model {
}
exports.PropositionModel = PropositionModel;
PropositionModel.tableName = 'propositions'; // database table name
PropositionModel.idColumn = 'id'; // id column name
PropositionModel.relationMappings = {
    project: {
        relation: objection_1.Model.BelongsToOneRelation,
        modelClass: () => projects_model_1.ProjectModel,
        join: {
            from: 'propositions.project_id',
            to: 'projects.id',
        },
    },
    proponent: {
        relation: objection_1.Model.BelongsToOneRelation,
        modelClass: () => userProfile_model_1.UserProfileModel,
        join: {
            from: 'propositions.proponent_id',
            to: 'users_profile.id',
        },
    },
};
//# sourceMappingURL=propositions.model.js.map