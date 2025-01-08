import Table from "src/components/tables/Table.jsx";
import TableHead from "src/components/tables/TableHead.jsx";
import TableBody from "src/components/tables/TableBody.jsx";

import { columns, skeletonColumns, skeletonData } from "./table.jsx";

import useUsers from "src/components/admin/manage-users/hooks/useUsers.js";


function UserTable() {
	const { users, isDoneLoading } = useUsers();

	return (
		<Table
			columns={isDoneLoading ? columns: skeletonColumns }
			data={isDoneLoading ? users: skeletonData}
		>
			<TableHead />
			<TableBody />
		</Table>
	)
}

export default UserTable;