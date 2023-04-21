"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await knex.schema.table('projects', table => {
        table.uuid('worker_id').references('id').inTable('users_profile');
    });
}
exports.up = up;
async function down(knex) {
    await knex.schema.table('projects', table => {
        table.dropColumn('worker_id');
    });
}
exports.down = down;
//# sourceMappingURL=20230418035424_update_projects_table.ts.js.map