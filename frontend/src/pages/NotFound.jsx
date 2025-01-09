import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router";

function NotFound() {
	return (
		<Container className="pt-5 mt-5 d-flex flex-column justify-content-center align-items-center text-center">
			<h2 className="h1">Error 404</h2>

			<p>
				The page you requested <span className="text-decoration-underline">wasn't found.</span>
			</p>

			<Link to="/" className="pt-4">
				<Button>Go back</Button>
			</Link>
		</Container>
	)
}

export default NotFound;