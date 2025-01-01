const { validation } = require("../middleware");
const { userService } = require("../services");

const router = require("express").Router();

router.use(validation.validateAdmin);

router.get(
	"/users",
	async (req, res) => {
	const users = await userService.findAll();

	return res.status(200).json({ users });
});

module.exports = router;