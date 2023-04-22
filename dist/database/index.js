"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.knex = void 0;
const tslib_1 = require("tslib");
const knex_1 = tslib_1.__importDefault(require("knex"));
const config_1 = require("../config");
const dbConnection = {
    client: 'postgresql',
    connection: {
        charset: 'postgresql',
        timezone: 'UTC',
        user: config_1.DB_USER,
        password: config_1.DB_PASSWORD,
        host: config_1.DB_HOST,
        port: config_1.DB_PORT,
        database: config_1.DB_DATABASE,
    },
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        tableName: 'migrations',
        extension: 'ts',
        directory: './database/migrations',
    },
};
const knex = () => (0, knex_1.default)(dbConnection);
exports.knex = knex;
//# sourceMappingURL=index.js.map