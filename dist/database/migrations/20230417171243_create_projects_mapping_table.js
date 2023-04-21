"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    return knex.schema.createTable('projects_mapping', table => {
        table.uuid('id', { primaryKey: true, useBinaryUuid: true }).unsigned().unique().defaultTo(knex.raw('(uuid_generate_v4())'));
        table.uuid('project_id').notNullable().references('id').inTable('projects');
        table.uuid('project_category_id').notNullable().references('id').inTable('project_categories');
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
        table.timestamp('deleteAt').nullable();
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable('projects_mapping');
}
exports.down = down;
//# sourceMappingURL=20230417171243_create_projects_mapping_table.js.map