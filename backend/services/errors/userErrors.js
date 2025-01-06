class UserNotFound extends Error {
	constructor() {
		super("User not found");
		this.name = "USER_NOT_FOUND";
		this.statusCode = 404;
	}
}

class InvalidRole extends Error {
	constructor() {
		super("Invalid role");
		this.name = "INVALID_ROLE";
		this.statusCode = 403;
	}
}

module.exports = { UserNotFound, InvalidRole };