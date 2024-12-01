const { User } = require("../db");

const UserRepository = require("./user");


const userRepository = new UserRepository(User);

module.exports = {
    userRepository,
}