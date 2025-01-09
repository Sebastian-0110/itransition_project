import Button from "react-bootstrap/Button";
import { logout } from "src/state/thunks/auth.js";
import { useDispatch } from "react-redux";
import { useState } from "react";

function LogoutButton() {
	const dispatch = useDispatch();
	const [isFetching, setIsFetching] = useState(false);

	async function handleClick() {
		setIsFetching(true);
		await dispatch(logout());
		setIsFetching(false);
	}

	return (
		<Button onClick={handleClick} disabled={isFetching} size="lg" variant="danger">Logout</Button>
	)
}

export default LogoutButton;