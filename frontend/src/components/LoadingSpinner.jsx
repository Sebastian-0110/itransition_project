import Container from "react-bootstrap/Container";
import Spinner from 'react-bootstrap/Spinner';

function LoadingSpinner() {
	return (
		<Container className="vw-100 vh-100 d-flex justify-content-center align-items-center flex-column">
			<Spinner animation="border" variant="primary" />
		</Container>
	)
}

export default LoadingSpinner;