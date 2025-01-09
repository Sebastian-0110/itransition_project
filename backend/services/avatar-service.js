const crypto = require("crypto");
const avatarServer = "https://robohash.org/"
const extraArguments = "?size=1024x1024";

function createAvatar(email) {
	const salt = crypto.randomBytes(32).toString("hex");
	const hash = crypto.createHash("sha256")
		.update(email + salt)
		.digest("hex");

	return avatarServer + hash + extraArguments;
}

module.exports = { createAvatar };