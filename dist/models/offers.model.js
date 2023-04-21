"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferModel = void 0;
const objection_1 = require("objection");
const userProfile_model_1 = require("./userProfile.model");
const projects_model_1 = require("./projects.model");
class OfferModel extends objection_1.Model {
}
exports.OfferModel = OfferModel;
OfferModel.tableName = 'offers'; // database table name
OfferModel.idColumn = 'id'; // id column name
OfferModel.relationMappings = {
    project: {
        relation: objection_1.Model.BelongsToOneRelation,
        modelClass: () => projects_model_1.ProjectModel,
        join: {
            from: 'offers.project_id',
            to: 'projects.id',
        },
    },
    proponent: {
        relation: objection_1.Model.BelongsToOneRelation,
        modelClass: () => userProfile_model_1.UserProfileModel,
        join: {
            from: 'offers.proponent_id',
            to: 'users_profile.id',
        },
    },
};
//# sourceMappingURL=offers.model.js.map