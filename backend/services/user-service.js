const { authErrors } = require("./errors");


class UserService {
    constructor(userRepository, passwordService) {
        this.userRepository = userRepository;
        this.passwordService = passwordService;
    }

    async signup(data) {
        return await this.userRepository.create(data);
    }

    async login(email, password) {
        const user = await this.userRepository.findByEmail(email);

        if (!user || !(await this.passwordService.comparePasswordHash(user.password, password))) {
            throw new authErrors.InvalidCredentials();
        }

        return user;
    }
}

module.exports = UserService;