import Knex from 'knex';
import { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } from '../config';

const dbConnection = {
  client: 'postgresql',
  connection: {
    charset: 'postgresql',
    timezone: 'UTC',
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_DATABASE,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'migrations',
    extension: 'ts',
    directory: './database/migrations',
  },
};

export const knex = () => Knex(dbConnection);
