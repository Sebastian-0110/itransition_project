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

router.patch(
	"/users/:userId/role",
	async (req, res, next) => {
		const { role } = req.body
		const { userId } = req.params;

		try {
			const user = await userService.updateRole(userId, role);
			return res.status(200).json({ user });
		}
		catch (error) { next(error) }

	}
)

module.exports = router;