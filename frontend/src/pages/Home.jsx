import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router";


function Home() {
	return (
		<div className="d-flex flex-column gap-5">
			<Container fluid className="d-flex flex-column gap-2 my-5 p-5">
				<Row>
					<h2 className="h1 text-center fw-bolder">
						Create forms <br/>
						and gather responses <br/>
						easily <br/>
					</h2>
				</Row>

				<Row>
					<p className="text-secondary text-center fs-5">
						Build stunning forms,
						share them, <br/>
						and review submissions
						in one place! <br/>
					</p>
				</Row>

				<Row className="flex-column gap-3 align-items-center flex-sm-row gap-sm-0 justify-content-sm-center ">
					<Link to="/auth/signup" className="w-auto">
						<Button variant="primary">Get Started</Button>
					</Link>

					<a href="#more" className="w-auto">
						<Button variant="outline-secondary">Learn More</Button>
					</a>
				</Row>
			</Container>

			<div className="bg-body-tertiary p-5">

				<Container className="py-5" id="more">
					<Row className="text-center g-5">
						<Col xs={12} md={4}>
							<div className="d-flex flex-column gap-2">
								<h3 className="fw-bold">Create Stunning Forms</h3>
								<p>Easily design forms that look great and work seamlessly. Add customizable fields, set up
									conditional logic, and make your forms stand out. Start gathering feedback that matters
									today.</p>
							</div>
						</Col>

						<Col xs={12} md={4}>
							<div className="d-flex flex-column gap-2">
								<h3 className="fw-bold">Share in Seconds</h3>
								<p>Send your forms effortlessly through links or emails. Reach your audience wherever
									they
									are, and ensure your forms are accessible to everyone with mobile-friendly
									designs.</p>
							</div>
						</Col>

						<Col xs={12} md={4}>
						<div className="d-flex flex-column gap-2">
								<h3 className="fw-bold">Review Submissions</h3>
								<p>Access all responses in one organized dashboard. Use filters, export data, and analyze
									feedback with ease to make informed decisions faster than ever.</p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	)
}

export default Home
