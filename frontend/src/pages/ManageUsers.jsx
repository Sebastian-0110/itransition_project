import Container from "react-bootstrap/Container";
import UserTable from "src/components/admin/manage-users/UserTable.jsx";

import { useEffect, useState } from "react";
import fetchUsers from "src/api/fetchUsers.js";

function ManageUsers() {
	const [users, setUsers] = useState([]);
	const [isDoneLoading, setIsDoneLoading] = useState(false);

	useEffect(() => {
		async function fetchUsersSideEffect() {
			const result = await fetchUsers();
			setUsers(result.data?.users || []);
			setIsDoneLoading(true);
		}
		fetchUsersSideEffect();
	}, []);

	return (
		<Container fluid="lg" className="d-flex flex-column justify-center align-items-center gap-3 p-4">
			<h1>Users</h1>

			{ (() => {
				if (isDoneLoading && users.length === 0) return <p>No users :(</p>;
				return <UserTable users={users} isDoneLoading={isDoneLoading}/>
			})() }


		</Container>
	)
}

export default ManageUsers;