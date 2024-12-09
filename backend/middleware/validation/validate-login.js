const { validators } = require("../../validation");
const validateForm = require("./validate-form");

const validateLogin = [
	validators.emailValidator(),
	validators.passwordValidator(),
	validateForm,
]

module.exports = validateLogin;