const { validation, passport } = require("../middleware");
const { userService } = require("../services");
const router = require("express").Router();


router.post(
    "/login",
    validation.validateLogin,
    passport.authenticate("local"),
    (req, res) => {
        res.status(200).json(req.body);
    }
);

router.post(
    "/signup",
    validation.validateSignup,
    async (req, res) => {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const user = await userService.signup({ username, email, password });

        if (!user) {
            return res.status(400).send("Failed to create user");
        }

        res.status(200).json({message: "account created", user});
    }
)

module.exports = router;