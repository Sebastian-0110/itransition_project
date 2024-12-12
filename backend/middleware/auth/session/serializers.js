const passport = require("passport");
const { userService } = require("../../../services")


const userSerializer = (user, cb) => {
	return cb(null, user.id);
}

const userDeserializer = async (id, cb) => {
	try {
		const user = await userService.findById(id);
		return cb(null, user);
	}

	catch (error) {
		return cb(error);
	}
}

module.exports = { userSerializer, userDeserializer };