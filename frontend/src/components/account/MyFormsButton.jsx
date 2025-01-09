import Button from "react-bootstrap/Button";
import { Link } from "react-router";

function MyFormsButton() {
	return (
		<Link to="/app/my-forms">
			<Button variant="primary" size="lg" className="w-100">My forms</Button>
		</Link>
	)
}

export default MyFormsButton;