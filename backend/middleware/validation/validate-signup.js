const { validators } = require("../../validation");
const validateForm = require("./validate-form");

const validateSignup = [
	validators.usernameValidator(),
	validators.emailValidator(),
	validators.passwordValidator(),
	validateForm,
]

module.exports = validateSignup;