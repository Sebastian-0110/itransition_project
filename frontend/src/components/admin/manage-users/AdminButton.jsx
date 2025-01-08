import Button from "react-bootstrap/Button";
import { useState } from "react";

import useUpdateReduxUser from "./hooks/useUpdateReduxUser.js";
import updateRole from "src/api/updateRole.js";

import useUsers from "src/components/admin/manage-users/hooks/useUsers.js";


function AdminButton({ user }) {
	const [isFetching, setIsFetching] = useState(false);
	const updateReduxUser = useUpdateReduxUser();
	const { updateUserTableData } = useUsers();

	async function handleClick() {
		setIsFetching(true);
		const result = await updateRole(user.id,user.isAdmin ? "user" : "admin");

		if (result.success) {
			updateUserTableData(result.data.user);
			updateReduxUser(result.data.user);
		}

		else alert("Couldn't grant/revoke admin permissions")

		setIsFetching(false);
	}

	return (
		<div className="d-flex d-sm-block justify-content-end p-1">
			<Button
				size="sm"
				disabled={isFetching}
				variant={user.isAdmin ? "danger": "primary"}
				onClick={handleClick}>
				{user.isAdmin ? "Remove admin": "Grant admin"}
			</Button>
		</div>
	)
}

export default AdminButton;