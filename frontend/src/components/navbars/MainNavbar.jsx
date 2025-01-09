import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import { Link } from "react-router";

import ThemeSelector from "../ThemeSelector.jsx";
import styles from "src/styles/components/Navbar.module.css";
import { useSelector } from "react-redux";
import { authSlice } from "src/state/slices/";
const { selectUser } = authSlice;

function MainNavbar() {
	const user = useSelector(selectUser);

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
					<Nav className="ms-auto align-items-center flex-sm-row-reverse">
						{
							user?.isAdmin ? <>
								<Nav.Link as="div">
									<Link to="/admin/users/">
										<Button variant="danger">Manage users</Button>
									</Link>
								</Nav.Link>
							</> : false
						}

						<Nav.Link as="div">
							<Link to="/app/account/">
								<Button variant="info">My account</Button>
							</Link>
						</Nav.Link>
						<div className="vr ms-2 d-none d-sm-block"></div>

						<ThemeSelector/>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default MainNavbar;