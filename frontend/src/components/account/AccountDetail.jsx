function AccountDetail({ label, data }) {
	return (
		<p className="fs-4 mb-2 mb-sm-1">
			{ label &&
				<span className="fw-bolder">{ label }: </span>
			} {data}
		</p>
	)
}

export default AccountDetail;