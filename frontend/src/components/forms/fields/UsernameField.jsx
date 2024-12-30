import Form from "react-bootstrap/Form";
import { USERNAME_MAX_LENGTH } from "src/config/constraints.js";

function UsernameField({ value, onChange }) {
	return (
		<Form.Group controlId="username">
			<Form.Label>Username</Form.Label>
			<Form.Control
				type="text"
				name="username"
				placeholder="john doe"
				required
				maxLength={USERNAME_MAX_LENGTH}
				value={value}
				onChange={onChange}
			/>
		</Form.Group>
	);
}

export default UsernameField;