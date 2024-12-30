import Form from "react-bootstrap/Form";
import { EMAIL_MAX_LENGTH} from "src/config/constraints.js";

function EmailField({ value, onChange }) {
	return (
		<Form.Group controlId="email">
			<Form.Label>Email </Form.Label>
			<Form.Control
				type="email"
				name="email"
				placeholder="john-doe@gmail.com"
				required
				maxLengt={EMAIL_MAX_LENGTH}
				value={value}
				onChange={onChange}
			/>
		</Form.Group>
	)
}

export default EmailField;