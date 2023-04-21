"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    return knex.schema.createTable('users', table => {
        table.uuid('id', { primaryKey: true, useBinaryUuid: true }).primary().unsigned().defaultTo(knex.raw('(uuid_generate_v4())'));
        table.string('email', 45).notNullable();
        table.string('password', 255).notNullable();
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable('users');
}
exports.down = down;
//# sourceMappingURL=20230417100350_create_users_table.js.map