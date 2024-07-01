require("dotenv").config();
const PostgresDialect = require("@sequelize/postgres");
module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: PostgresDialect,
    port: process.env.DB_PORT,
    ssl: true,
    clientMinMessages: "notice",
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: PostgresDialect,
    port: process.env.DB_PORT,
    ssl: true,
    clientMinMessages: "notice",
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: PostgresDialect,
    port: process.env.DB_PORT,
    ssl: true,
    clientMinMessages: "notice",
  },
};
