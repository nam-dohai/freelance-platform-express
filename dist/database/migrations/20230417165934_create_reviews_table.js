"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    return knex.schema.createTable('reviews', table => {
        table.uuid('id', { primaryKey: true, useBinaryUuid: true }).unsigned().defaultTo(knex.raw('(uuid_generate_v4())'));
        table.integer('rate').notNullable();
        table.uuid('author_id').notNullable().references('id').inTable('users_profile');
        table.uuid('project_id').notNullable().references('id').inTable('projects');
        table.string('comment', 225).notNullable();
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
        table.timestamp('deleteAt').nullable();
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable('reviews');
}
exports.down = down;
//# sourceMappingURL=20230417165934_create_reviews_table.js.map