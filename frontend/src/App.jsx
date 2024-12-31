import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router";

import Home from "./pages/Home.jsx";
import Main from "./pages/Main.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import NotFound from "./pages/NotFound.jsx"
import LandingLayout from "./layouts/LandingLayout.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { fetchAuthState } from "src/state/thunks/auth.js";
import { useDispatch, useSelector } from "react-redux";

import 'react-loading-skeleton/dist/skeleton.css'
import { selectTheme } from "src/state/slices/theme.js";

function App() {
	const dispatch = useDispatch();
	const theme = useSelector(selectTheme);

	useEffect(() => {
		dispatch(fetchAuthState());
	}, []);

	useEffect(() => {
		document.documentElement.setAttribute("data-bs-theme", theme);
	}, [theme]);

	return (
		<Routes>
			<Route element={
				<ProtectedRoute requiresAuth={false} redirectTo="/app/">
					<LandingLayout />
				</ProtectedRoute>
			}>
				<Route index element={<Home />}/>

				<Route path="/auth">
					<Route index element={<Navigate to="signup" replace/>}/>
					<Route path="login" element={ <Login /> } />
					<Route path="signup" element={ <Signup /> } />
				</Route>
			</Route>

			<Route path="/app/" element={
				<ProtectedRoute requiresAuth={true} redirectTo="/" >
					<MainLayout />
				</ProtectedRoute>
			}>
				<Route index element={<Main />} />
			</Route>

			<Route path="*" element={<NotFound/>}/>
		</Routes>
	)
}

export default App;