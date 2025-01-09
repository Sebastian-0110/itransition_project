const UserService = require('./user-service');
const passwordService = require("./password-service");
const avatarService = require("./avatar-service");
const { userRepository } = require('../repositories');


const userService = new UserService(userRepository, passwordService, avatarService);

module.exports = { userService };