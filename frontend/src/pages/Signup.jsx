import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SignupForm from "src/components/forms/SignupForm.jsx";

function Signup() {
	return (
		<Container fluid="md" className="p-3 h-100 align-items-center">
			<Row className="h-100 justify-content-center align-items-center">
				<Col md={6}>
					<SignupForm />
				</Col>
			</Row>

		</Container>
	)

}

export default Signup;