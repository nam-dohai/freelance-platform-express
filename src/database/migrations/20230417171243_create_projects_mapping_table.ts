import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('projects_mapping', table => {
    table.uuid('id').unsigned().primary();
    table.uuid('project_id').notNullable().references('id').inTable('projects');
    table.uuid('project_category_id').notNullable().references('id').inTable('project_categories');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
    table.timestamp('deleteAt').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('projects_mapping');
}
