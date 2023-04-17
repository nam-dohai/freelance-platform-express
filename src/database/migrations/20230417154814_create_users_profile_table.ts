import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users_profile', table => {
    table.uuid('id').unsigned().primary();
    table.string('name', 20).notNullable();
    table.string('image_url').notNullable();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.string('portfolio');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
    table.timestamp('deleteAt').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('user_profile');
}
