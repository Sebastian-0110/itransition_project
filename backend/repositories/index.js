const { User } = require("../db");

const UserRepository = require("./user-repository");


const userRepository = new UserRepository(User);

module.exports = {
    userRepository,
}