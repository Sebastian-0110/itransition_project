class UserRepository {
    constructor(userModel) {
        this.userModel = userModel;
    }

    async findById(id) {
        return await this.userModel.findByPk(id);
    }

    async create(data) {
        return await this.userModel.create(data);
    }
}

module.exports = UserRepository;