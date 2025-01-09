import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router";

function MyForms() {
	return (
		<Container className="p-3 d-flex flex-column gap-5">
			<h2 className="text-center">My forms</h2>

			<div className="d-flex justify-content-center">
				<Link to="/app/create-form">
					<Button>Create Form</Button>
				</Link>
			</div>
		</Container>
	)
}

export default MyForms;