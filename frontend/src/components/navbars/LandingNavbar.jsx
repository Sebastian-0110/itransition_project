import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import { Link } from "react-router";

import ThemeSelector from "../ThemeSelector.jsx";
import styles from "../../styles/components/LandingNavbar.module.css";

function LandingNavbar() {

	return (
		<Navbar expand="sm" className="bg-secondary-subtle">
			<Container fluid className="align-items-center">
				<Navbar.Brand as="div">
					<Link to="/" className={styles.brand}>
						<h2 className="my-0">PONDERA</h2>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar-nav" />
				<Navbar.Collapse id="navbar-nav">
					<hr className="d-sm-none" />

					<Nav className="ms-auto align-items-center flex-sm-row-reverse">
						<div className="d-flex gap-3 gap-sm-0">
							<Nav.Link as="div">
								<Link to="/auth/signup">
									<Button variant="primary">Sign up</Button>
								</Link>
							</Nav.Link>

							<Nav.Link as="div">
								<Link to="/auth/login">
									<Button variant="outline-primary">Login</Button>
								</Link>
							</Nav.Link>
						</div>

						<div className="vr ms-2 d-none d-sm-block"></div>

						<ThemeSelector/>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default LandingNavbar;