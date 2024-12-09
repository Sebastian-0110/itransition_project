class InvalidCredentials extends Error {
	constructor() {
		super("Invalid credentials");
		this.name = "INVALID_CREDENTIALS";
		this.statusCode = 401;
	}
}


module.exports = { InvalidCredentials };