class UserMapper {
	static toDTO(userModel) {
		if (!userModel) return;

		return {
			id: userModel.id,
			username: userModel.username,
			email: userModel.email,
			isAdmin: userModel.isAdmin,
		}
	}
}

module.exports = UserMapper;