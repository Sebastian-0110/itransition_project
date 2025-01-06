import Container from "react-bootstrap/Container";
import UserTable from "src/components/admin/manage-users/UserTable.jsx";

import { useEffect, useState } from "react";

import { endpoint } from "src/api/utils.js";

function ManageUsers() {
	const [users, setUsers] = useState([]);
	const [isDoneLoading, setIsDoneLoading] = useState(false);

	useEffect(() => {
		async function fetchUsers() {
			const result = await fetch(endpoint("/admin/users/"), {
				method: "GET", headers: { "Accept": "application/json" },
			});

			const data = await result.json();
			setUsers(data["users"] || []);
			setIsDoneLoading(true);
		}
		fetchUsers();
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