import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Main() {
	return (
		<Container>
			<div className="p-5 d-flex h-100 flex-column gap-4">
			</div>

			<Row className="justify-content-center">
				<Col md={6}>
					<h3 className="text-center mb-4">Page under construction</h3>

					<Image fluid src="https://images.vexels.com/media/users/3/76924/raw/d16d609a982135cff7c9681bbab347c9-website-under-construction-design.jpg" />
				</Col>
			</Row>
		</Container>

	);
}

export default Main;