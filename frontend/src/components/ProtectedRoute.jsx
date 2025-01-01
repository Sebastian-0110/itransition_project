import { useSelector } from "react-redux";
import {selectIsLoggedIn, selectIsDoneLoading, selectUser } from "src/state/slices/auth.js";
import { Navigate } from "react-router";
import LoadingSpinner from "src/components/LoadingSpinner.jsx";

function ProtectedRoute({ requiresAuth, requiresAdmin, redirectTo, children }) {
	const isLoggedIn = useSelector(selectIsLoggedIn);
	const isDoneLoading = useSelector(selectIsDoneLoading);
	const user = useSelector(selectUser);

	if (!isDoneLoading) return <LoadingSpinner />
	if ((isLoggedIn !== requiresAuth) || (requiresAdmin && !user?.isAdmin)) {
 		return <Navigate to={redirectTo} replace />
	}

	return children;
}

export default ProtectedRoute;