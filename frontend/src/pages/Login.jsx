import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { Link } from "react-router";

function Login() {
	return (
		<Container fluid="md" className="p-3 h-100 align-items-center">
			<Row className="h-100 justify-content-center align-items-center">
				<Col md={6}>
					<Form className="d-flex flex-column gap-4 justifiy-content-center">
						<h1 className="mx-auto mb-3">Login</h1>

						<Form.Group controlId="email">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" name="email" placeholder="john-doe@gmail.com" />
						</Form.Group>

						<Form.Group controlId="password">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" name="password" placeholder="qwerty123" />
						</Form.Group>

						<Button type="submit" variant="primary">Login</Button>

						<Form.Text as="p" className="text-center">
							Don't have an account? <Link to="/auth/signup">Sign up!</Link>
						</Form.Text>
					</Form>
				</Col>
			</Row>

		</Container>
	)
}

export default Login;