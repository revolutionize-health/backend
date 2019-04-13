module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/dev.sqlite3"
    },
    migrations: {
      tableName: "./data/migrations"
    },
    seeds: {
      tableName: "./data/seeds"
    }
  },

  testing: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/test.sqlite3"
    },
    migrations: {
      tableName: "./data/migrations"
    },
    seeds: {
      tableName: "./data/seeds"
    }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL || {
      database: "my_db",
      user: "username",
      password: "password"
    },
    migrations: {
      tableName: "./data/migrations"
    },
    seeds: {
      tableName: "./data/seeds"
    }
  }
};
