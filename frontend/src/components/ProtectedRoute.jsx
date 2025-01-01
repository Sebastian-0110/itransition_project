import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsDoneLoading } from "src/state/slices/auth.js";
import { Navigate } from "react-router";
import LoadingSpinner from "src/components/LoadingSpinner.jsx";

function ProtectedRoute({ requiresAuth, redirectTo, children }) {
	const isLoggedIn = useSelector(selectIsLoggedIn);
	const isDoneLoading = useSelector(selectIsDoneLoading);

	if (!isDoneLoading) return <LoadingSpinner />
	if (isLoggedIn !== requiresAuth) return <Navigate to={redirectTo} replace />

	return children;
}

export default ProtectedRoute;