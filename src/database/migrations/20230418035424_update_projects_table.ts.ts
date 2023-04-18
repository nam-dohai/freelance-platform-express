import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  await knex.schema.table('projects', table => {
    table.uuid('worker_id').references('id').inTable('users_profile');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.table('projects', table => {
    table.dropColumn('worker_id');
  });
}
