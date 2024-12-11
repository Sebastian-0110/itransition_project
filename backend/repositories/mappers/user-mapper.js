class UserMapper {
	static toDTO(userModel) {
		if (!userModel) return;

		return {
			id: userModel.id,
			username: userModel.username,
			email: userModel.email,
		}
	}
}

module.exports = UserMapper;