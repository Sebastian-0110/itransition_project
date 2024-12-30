import Form from "react-bootstrap/Form";
import { PASSWORD_MAX_LENGTH} from "src/config/constraints.js";

function PasswordField({ value, onChange }) {
	return (
		<Form.Group controlId="password">
			<Form.Label>Password</Form.Label>
			<Form.Control
				type="password"
				name="password"
				placeholder="qwerty123"
				required
				maxLength={PASSWORD_MAX_LENGTH}
				value={value}
				onChange={onChange}
			/>
		</Form.Group>
	)
}

export default PasswordField;