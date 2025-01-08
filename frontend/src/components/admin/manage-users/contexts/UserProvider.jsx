import { useEffect, useState } from "react";
import UserContext from "src/components/admin/manage-users/contexts/UserContext.js";
import fetchUsers from "src/api/fetchUsers.js";


function UserProvider({ children }) {
	const [users, setUsers] = useState([]);
	const [isDoneLoading, setIsDoneLoading] = useState(false);

	const updateUserTableData = (newUser) => {
		setUsers((prevUsers) => {
			return prevUsers.map((prevUser) => {
				return prevUser.id === newUser.id ? newUser: prevUser;
			})
		})
	}

	useEffect(() => {
		async function fetchUsersSideEffect() {
			const result = await fetchUsers();
			if (result.success) setUsers(result.data.users);
			else console.log("Couldn't fetch users: " + JSON.stringify(result.error));
			setIsDoneLoading(true);
		}
		fetchUsersSideEffect();
	}, []);

	return (
		<UserContext.Provider value={{ users, isDoneLoading, updateUserTableData }}>
			{ children }
		</UserContext.Provider>
	)
}

export default UserProvider;