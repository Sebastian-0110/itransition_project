import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProfilePicture from "src/components/account/ProfilePicture.jsx";
import AccountDetail from "src/components/account/AccountDetail.jsx";
import LogoutButton from "src/components/account/LogoutButton.jsx";
import MyFormsButton from "src/components/account/MyFormsButton.jsx";
import { useSelector } from "react-redux";
import { selectUser } from "src/state/slices/auth.js";


function Account() {
	const user = useSelector(selectUser);

	return (
		<Container className="p-5">
			<h1 className="text-center pb-3">My account</h1>

			<Row className="justify-content-center">
				<Col xs={8} sm={6} md={3}>
					<ProfilePicture url={user.avatar} />
				</Col>
			</Row>

			<Row className="text-center mt-5">
				<Col xs={12}><AccountDetail label="Username" data={user.username} /> </Col>
				<Col xs={12}><AccountDetail label="Email" data={user.email} /> </Col>
				{ user.isAdmin &&
					<Col xs={12}><AccountDetail data={<span className="text-danger fs-4">You are admin!</span>}/> </Col>
				}
			</Row>

			<Row className="justify-content-center mt-3">
				<Col xs={12} className="d-flex flex-column flex-sm-row justify-content-center gap-3">
					<MyFormsButton />
					<LogoutButton />
				</Col>

			</Row>
		</Container>
	)
}

export default Account;