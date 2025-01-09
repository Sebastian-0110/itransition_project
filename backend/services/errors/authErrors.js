class InvalidCredentials extends Error {
	constructor() {
		super("Invalid credentials");
		this.name = "INVALID_CREDENTIALS";
		this.statusCode = 401;
	}
}

class EmailAlreadyInUse extends Error {
	constructor() {
		super("Email already in use");
		this.name = "EMAIL_ALREADY_IN_USE";
		this.statusCode = 409;
	}
}

module.exports = { InvalidCredentials, EmailAlreadyInUse };