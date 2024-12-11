const { authErrors } = require("./errors");
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
}

module.exports = UserService;