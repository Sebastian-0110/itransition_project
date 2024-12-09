const UserService = require('./user-service');
const passwordService = require("./password-service");
const { userRepository } = require('../repositories');


const userService = new UserService(userRepository, passwordService);

module.exports = { userService };