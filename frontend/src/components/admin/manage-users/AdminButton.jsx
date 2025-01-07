import Button from "react-bootstrap/Button";
import updateRole from "src/api/updateRole.js";
import {useState} from "react";

function AdminButton({ user, updateUser }) {
	const variant = user.isAdmin ? "danger": "primary";
	const [isFetching, setIsFetching] = useState(false);

	async function handleClick() {
		setIsFetching(true);
		const result = await updateRole(user.id, user.isAdmin ? "user": "admin");
		setIsFetching(false);
	}

	return (
		<div className="d-flex d-sm-block justify-content-end p-1">
			<Button
				size="sm"
				disabled={isFetching}
				variant={variant}
				onClick={handleClick}>
				{user.isAdmin ? "Remove admin": "Grant admin"}
			</Button>
		</div>
	)
}

export default AdminButton;