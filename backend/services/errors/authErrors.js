class InvalidCredentials extends Error {
	constructor() {
		super("Invalid credentials");
		this.name = "INVALID_CREDENTIALS";
		this.statusCode = 401;
	}
}

class UserNotFound extends Error {
	constructor() {
		super("User not found");
		this.name = "USER_NOT_FOUND";
		this.statusCode = 404;
	}
}

module.exports = { InvalidCredentials, UserNotFound };