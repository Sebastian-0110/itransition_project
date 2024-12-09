const {
    USERNAME_MAX_LENGTH,
    EMAIL_MAX_LENGTH,
    PASSWORD_MAX_LENGTH,
} = require("./constraints");

const messages = require("./messages");
const { body } = require("express-validator");


const emailValidator = () => {
    return body("email")
        .isEmail()
        .withMessage(messages.invalidFormat("email"))
        .isLength({ max: EMAIL_MAX_LENGTH })
        .withMessage(messages.maxLength("email", EMAIL_MAX_LENGTH))
}

const usernameValidator = () => {
    return body("username")
        .notEmpty()
        .withMessage(messages.required("username"))
        .isLength({ max: USERNAME_MAX_LENGTH })
        .withMessage(messages.maxLength("username"))
        .escape()
}

const passwordValidator = () => {
    return body("password")
        .notEmpty()
        .withMessage(messages.required("password"))
        .isLength({ max: PASSWORD_MAX_LENGTH })
        .withMessage(messages.maxLength("password"))
}


module.exports = {
    emailValidator,
    usernameValidator,
    passwordValidator,
}