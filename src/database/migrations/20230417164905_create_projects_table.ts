import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('projects', table => {
    table.uuid('id').unsigned().primary();
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

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('projects');
}
