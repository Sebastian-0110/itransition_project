class UserMapper {
	static toDTO(userModel) {
		return {
			id: userModel.id,
			username: userModel.username,
			email: userModel.email,
		}
	}
}

module.exports = UserMapper;