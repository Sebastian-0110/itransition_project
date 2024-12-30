import { useState } from "react";
import { Link } from "react-router";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { UsernameField, EmailField, PasswordField } from "src/components/forms/fields";

import { endpoint } from "src/config/api.js";

function SignupForm() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<Form action={endpoint("/auth/signup")} method="post" className="d-flex flex-column gap-4 justifiy-content-center">
			<h1 className="mx-auto mb-3">Sign up</h1>

			<UsernameField value={username} onChange={(e) => setUsername(e.target.value)} />
			<EmailField value={email} onChange={(e) => setEmail(e.target.value)} />
			<PasswordField value={password} onChange={(e) => setPassword(e.target.value)} />

			<Button type="submit" variant="primary">Sign up</Button>

			<Form.Text as="p" className="text-center">
				Already have an account? <Link to="/auth/login">Log in!</Link>
			</Form.Text>
		</Form>
	);
}

export default SignupForm;