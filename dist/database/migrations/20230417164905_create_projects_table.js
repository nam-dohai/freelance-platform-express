"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    return knex.schema.createTable('projects', table => {
        table.uuid('id', { primaryKey: true, useBinaryUuid: true }).unsigned().defaultTo(knex.raw('(uuid_generate_v4())'));
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.string('price').notNullable();
        table.uuid('author_id').notNullable().references('id').inTable('users_profile');
        table.string('status').notNullable();
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
        table.timestamp('deleteAt').nullable();
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable('projects');
}
exports.down = down;
//# sourceMappingURL=20230417164905_create_projects_table.js.map