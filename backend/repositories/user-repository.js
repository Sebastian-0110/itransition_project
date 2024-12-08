const UserMapper = require('./mappers/user-mapper');


class UserRepository {
    constructor(userModel) {
        this.userModel = userModel;
    }

    async findById(id) {
        return UserMapper.toDTO(await this.userModel.findByPk(id));
    }

    async findByEmail(email) {
        return UserMapper.toDTO(await this.userModel.findOne({ where: { email } }));
    }

    async create(data) {
        return UserMapper.toDTO(await this.userModel.create(data));
    }
}

module.exports = UserRepository;