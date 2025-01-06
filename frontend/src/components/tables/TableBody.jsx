const TableData = ({ element, column }) => {
	const data = typeof column.field === "function" ? column.field(element): element[column.field];

	return (<>
		<p className="d-inline d-sm-none fw-bold">{ column.labelOnMobile && column.label + ": "}
		</p> { data }
	</>);
};

function TableBody({ columns, data }) {
	return (
		<tbody>
			{ data.map((element, i) => {
				return <tr key={i} className="d-flex flex-column d-sm-table-row">
					{ columns.map((column) => {
						return <td key={column.label} className="align-middle">
							<TableData {...{ element, column }} />
						</td>
					}) }
				</tr>
			}) }
		</tbody>
	)
}

export default TableBody;