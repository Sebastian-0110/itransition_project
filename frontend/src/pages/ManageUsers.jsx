import Container from "react-bootstrap/Container";
import UserTable from "src/components/admin/manage-users/UserTable.jsx";

import UserProvider from "src/components/admin/manage-users/contexts/UserProvider.jsx";

function ManageUsers() {
	return (
		<UserProvider>
			<Container fluid="lg" className="d-flex flex-column justify-center align-items-center gap-3 p-4">
				<h1>Users</h1>
				<UserTable />
			</Container>
		</UserProvider>
	)
}

export default ManageUsers;