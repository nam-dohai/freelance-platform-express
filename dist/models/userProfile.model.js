"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileModel = void 0;
const objection_1 = require("objection");
class UserProfileModel extends objection_1.Model {
}
exports.UserProfileModel = UserProfileModel;
UserProfileModel.tableName = 'users_profile'; // database table name
UserProfileModel.idColumn = 'id'; // id column name
//# sourceMappingURL=userProfile.model.js.map