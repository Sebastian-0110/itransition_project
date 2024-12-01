const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = process.env.DB;
const name = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;

const sequelize = new Sequelize(
    `${db}://${user}:${password}@${host}:${port}/${name}`,
    { dialectOptions: { ssl: { require: true, rejectUnauthorized: true, } } }
);

module.exports = sequelize;