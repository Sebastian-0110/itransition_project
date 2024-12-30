import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import LoginForm from "src/components/forms/LoginForm.jsx";

function Login() {

	return (
		<Container fluid="md" className="p-3 h-100 align-items-center">
			<Row className="h-100 justify-content-center align-items-center">
				<Col md={6}>
					<LoginForm />
				</Col>
			</Row>
		</Container>
	)
}

export default Login;