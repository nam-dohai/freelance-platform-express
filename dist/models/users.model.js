"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const objection_1 = require("objection");
class UserModel extends objection_1.Model {
}
exports.UserModel = UserModel;
UserModel.tableName = 'users'; // database table name
UserModel.idColumn = 'id'; // id column name
//# sourceMappingURL=users.model.js.map