import { default as BootstrapTable } from "react-bootstrap/Table";
import TableHead from "./TableHead.jsx";
import TableBody from "./TableBody.jsx"

function Table({ columns, data }) {
	return (
		<BootstrapTable striped bordered size="sm" className="text-start text-sm-center">
			<TableHead columns={columns} />
			<TableBody columns={columns} data={data} />
		</BootstrapTable>
	)
}

export default Table;