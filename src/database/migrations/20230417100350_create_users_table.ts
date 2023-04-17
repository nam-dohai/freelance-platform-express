import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  return knex.schema.createTable('users', table => {
    table.uuid('id', { primaryKey: true, useBinaryUuid: true }).primary().unsigned().defaultTo(knex.raw('(uuid_generate_v4())'));
    table.string('email', 45).notNullable();
    table.string('password', 255).notNullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users');
}
