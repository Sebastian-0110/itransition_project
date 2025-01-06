function TableHead({ columns }) {
	return (
		<thead>
			<tr className="d-none d-sm-table-row">
				{ columns.map(({ label, field }) => {
					return <th key={field}>{ label }</th>
				}) }
			</tr>
		</thead>
	)
}

export default TableHead;