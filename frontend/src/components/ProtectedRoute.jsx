import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "src/state/slices/auth.js";
import { Navigate } from "react-router";


function ProtectedRoute({ requiresAuth, redirectTo, children }) {
	const isLoggedIn = useSelector(selectIsLoggedIn);

	if (isLoggedIn !== requiresAuth) {
		return <Navigate to={redirectTo} replace />
	}

	return children;
}

export default ProtectedRoute;