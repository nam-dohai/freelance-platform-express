"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    return knex.schema.createTable('project_categories', table => {
        table.uuid('id', { primaryKey: true, useBinaryUuid: true }).unsigned().defaultTo(knex.raw('(uuid_generate_v4())'));
        table.string('name').notNullable();
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
        table.timestamp('deleteAt').nullable();
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable('project_categories');
}
exports.down = down;
//# sourceMappingURL=20230417170833_create_project_categories_table.js.map