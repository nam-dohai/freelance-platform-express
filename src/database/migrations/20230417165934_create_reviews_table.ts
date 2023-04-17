import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('reviews', table => {
    table.uuid('id').unsigned().primary();
    table.integer('rate').notNullable();
    table.uuid('author_id').notNullable().references('id').inTable('users_profile');
    table.uuid('project_id').notNullable().references('id').inTable('projects');
    table.string('comment', 225).notNullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
    table.timestamp('deleteAt').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('reviews');
}
