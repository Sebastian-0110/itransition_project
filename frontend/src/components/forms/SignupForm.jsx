import { useState } from "react";
import { Link, useNavigate } from "react-router";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { UsernameField, EmailField, PasswordField } from "src/components/forms/fields";


import { endpoint } from "src/api/utils.js";

function SignupForm() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	async function onSubmit(e) {
		e.preventDefault();

		const result = await fetch(
			endpoint("/auth/signup"),
			{
				method: "POST", headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, email, password }),
			}
		);

		if (!result.ok) return alert("Invalid input"); // TODO: Implement a proper notification system

		alert("Successfully signup. Now login!");
		return navigate("/auth/login/");
	}

	return (
		<Form
			action={endpoint("/auth/signup")}
			method="post"
			className="d-flex flex-column gap-4 justifiy-content-center"
			onSubmit={onSubmit}
		>
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