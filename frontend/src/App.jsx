import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import NotFound from "./pages/NotFound.jsx"
import LandingLayout from "./layouts/LandingLayout.jsx";

import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { fetchAuthState } from "src/state/thunks/auth.js";
import { useDispatch } from "react-redux";


function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAuthState());
	}, []);

	return (
		<Routes>
			<Route element={<LandingLayout/>}>
				<Route index element={<Home />}/>

				<Route path="/auth">
					<Route index element={<Navigate to="signup" replace/>}/>
					<Route path="login" element={
						<ProtectedRoute requiresAuth={false} redirectTo="/app/">
							<Login/>
						</ProtectedRoute>
					} />

					<Route path="signup" element={
						<ProtectedRoute requiresAuth={false} redirectTo="/app/">
							<Signup/>
						</ProtectedRoute>
					} />

				</Route>

				<Route path="*" element={<NotFound/>}/>
			</Route>
		</Routes>
	)
}

export default App;