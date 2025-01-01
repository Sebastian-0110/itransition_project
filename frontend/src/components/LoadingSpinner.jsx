import Container from "react-bootstrap/Container";
import { MoonLoader } from "react-spinners";

function LoadingSpinner() {
	return (
		<Container className="vw-100 vh-100 d-flex justify-content-center align-items-center flex-column">
			<MoonLoader color="#0d6efd" size={50} loading />
		</Container>
	)
}

export default LoadingSpinner;