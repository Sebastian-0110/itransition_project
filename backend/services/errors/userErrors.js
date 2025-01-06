class UserNotFound extends Error {
	constructor() {
		super("User not found");
		this.name = "USER_NOT_FOUND";
		this.statusCode = 404;
	}
}

module.exports = { UserNotFound };