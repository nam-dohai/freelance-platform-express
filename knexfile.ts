import type { Knex } from 'knex';
import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from './src/config';

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      charset: 'utf8',
      timezone: 'UTC',
      user: DB_USER,
      password: DB_PASSWORD,
      host: DB_HOST,
      port: Number(DB_PORT),
      database: DB_DATABASE,
    },
    migrations: {
      directory: 'src/database/migrations',
      extension: 'ts',
      tableName: 'migrations',
      // stub: 'src/database/stubs',
    },
    seeds: {
      directory: 'src/database/seeds',
      // stub: 'src/database/stubs',
    },
  },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user: 'username',
  //     password: 'password',
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations',
  //   },
  // },
};

module.exports = config;
