// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: 'final_project',
      user:     'root',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
};
