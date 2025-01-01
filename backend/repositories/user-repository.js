class UserRepository {
    constructor(userModel) {
        this.userModel = userModel;
    }

    async findById(id) {
        const user = await this.userModel.findByPk(id);
        if (user) return user.toJSON();
    }

    async findByEmail(email) {
        const user = await this.userModel.findOne({ where: { email } })
        if (user) return user.toJSON();
    }

    async findAll() {
        const users = await this.userModel.findAll();
        return users.map((user) => user.toJSON());
    }

    async create(data) {
        const user = await this.userModel.create(data);
        if (user) return user.toJSON();
    }
}

module.exports = UserRepository;