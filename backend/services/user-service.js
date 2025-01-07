const { authErrors, userErrors } = require("./errors");
const UserMapper = require("./mappers/user-mapper");

class UserService {
    constructor(userRepository, passwordService) {
        this.userRepository = userRepository;
        this.passwordService = passwordService;
    }

    async signup(data) {
        data.password = await this.passwordService.generatePasswordHash(data.password);
        const user = await this.userRepository.create(data);
        if (user) return UserMapper.toDTO(user);
    }

    async login(email, password) {
        const user = await this.userRepository.findByEmail(email);

        if (!user || !(await this.passwordService.comparePasswordHash(user.password, password))) {
            throw new authErrors.InvalidCredentials();
        }

        return UserMapper.toDTO(user);
    }

    async findById(id) {
        const user = await this.userRepository.findById(id);

        if (!user) throw new userErrors.UserNotFound();

        return UserMapper.toDTO(user);
    }

    async findAll() {
        const users = await this.userRepository.findAll();
        return users.map((user) => UserMapper.toDTO(user));
    }

    async updateRole(id, role) {
        const validRoles = ["user", "admin"]; // TODO: Implement a proper role system
        if (!validRoles.includes(role)) throw new userErrors.InvalidRole();

        const success = await this.userRepository.update(id, {
            isAdmin: role === "admin",
        });

        if (!success) throw new userErrors.UserNotFound();
        return this.findById(id);
    }
}

module.exports = UserService;