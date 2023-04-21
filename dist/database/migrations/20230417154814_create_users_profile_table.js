"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    return knex.schema.createTable('users_profile', table => {
        table.uuid('id', { primaryKey: true, useBinaryUuid: true }).unsigned().defaultTo(knex.raw('(uuid_generate_v4())'));
        table.string('name', 20).notNullable();
        table.string('image_url').notNullable();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('portfolio');
        table.uuid('user_id').notNullable().references('id').inTable('users');
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
        table.timestamp('deleteAt').nullable();
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable('users_profile');
}
exports.down = down;
//# sourceMappingURL=20230417154814_create_users_profile_table.js.map