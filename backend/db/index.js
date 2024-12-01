const { sequelize } = require("./db");
const User = require("./models/user");

module.exports = {
    sequelize, User
}