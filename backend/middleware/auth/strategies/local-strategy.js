const LocalStrategy = require("passport-local");
const { userService } = require("../../../services");
const { authErrors } = require("../../../services/errors");


const localStrategy = new LocalStrategy(
	{ usernameField: "email", passwordField: "password", session: true},
	async (email, password, done) => {
		try {
			const user = await userService.login(email, password);
			console.log("Logged in correctly: " + user.email);
			return done(null, user);
		}

		catch (error) {
			console.log("")
			if (error instanceof authErrors.InvalidCredentials) return done(null, false, { message: error.message });
			return done(error);
		}
	}
);


module.exports = localStrategy;