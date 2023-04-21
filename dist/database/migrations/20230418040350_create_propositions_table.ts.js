"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    return knex.schema.createTable('propositions', table => {
        table.uuid('id', { primaryKey: true, useBinaryUuid: true }).unsigned().defaultTo(knex.raw('(uuid_generate_v4())'));
        table.uuid('project_id').notNullable().references('id').inTable('projects');
        table.uuid('proponent_id').notNullable().references('id').inTable('users_profile');
        table.string('message', 255);
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable('propositions');
}
exports.down = down;
//# sourceMappingURL=20230418040350_create_propositions_table.ts.js.map