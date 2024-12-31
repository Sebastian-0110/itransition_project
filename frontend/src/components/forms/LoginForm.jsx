import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { EmailField, PasswordField } from "src/components/forms/fields";
import { endpoint } from "src/config/api.js";

import { authSlice } from "src/state/slices"
const { setLoggedIn, setUser} = authSlice;

function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();
	const dispatch = useDispatch();

	async function onSubmit(e) {
		e.preventDefault();

		const result = await fetch(
			endpoint("/auth/login"),
			{ method: "POST", headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			}
		);

		if (!result.ok) return alert("Invalid credentials"); // TODO: Implement a proper notification system

		dispatch(setLoggedIn(true));
		dispatch(setUser(await result.json()));

		return navigate("/app/");
	}

	return (
		<Form
			action={endpoint("/auth/login")}
			onSubmit={onSubmit}
			method="post"
			className="d-flex flex-column gap-4 justifiy-content-center"
		>
			<h1 className="mx-auto mb-3">Login</h1>

			<EmailField value={email} onChange={(e) => setEmail(e.target.value)} />
			<PasswordField value={password} onChange={(e) => setPassword(e.target.value)} />

			<Button type="submit" variant="primary">Login</Button>

			<Form.Text as="p" className="text-center">
				Don't have an account? <Link to="/auth/signup">Sign up!</Link>
			</Form.Text>
		</Form>
	)
}

export default LoginForm;