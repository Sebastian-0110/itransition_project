import Button from "react-bootstrap/Button";

function AdminButton({ user }) {
	return (
		<div className="d-flex d-sm-block justify-content-end p-1">
			<Button size="sm" variant={user.isAdmin ? "danger": "primary"}>
				{user.isAdmin ? "Remove admin": "Grant admin"}
			</Button>
		</div>
	)
}

export default AdminButton;