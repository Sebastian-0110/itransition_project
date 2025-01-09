import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router";

import Home from "./pages/Home.jsx";
import Main from "./pages/Main.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import NotFound from "./pages/NotFound.jsx";
import ManageUsers from "src/pages/ManageUsers.jsx";
import Account from "src/pages/Account.jsx";
import LandingLayout from "./layouts/LandingLayout.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { useSelector } from "react-redux";

import 'react-loading-skeleton/dist/skeleton.css'
import { selectTheme } from "src/state/slices/theme.js";

function App() {
	const theme = useSelector(selectTheme);

	useEffect(() => {
		document.documentElement.setAttribute("data-bs-theme", theme);
	}, [theme]);

	return (
		<Routes>
			<Route element={
				<ProtectedRoute requiresAuth={false} requiresAdmin={false} redirectTo="/app/">
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
				<ProtectedRoute requiresAuth={true} requiresAdmin={false} redirectTo="/" >
					<MainLayout />
				</ProtectedRoute>
			}>
				<Route index element={<Main />} />
				<Route path="account" element={<Account />} />
			</Route>

			<Route path="/admin/" element={
				<ProtectedRoute requiresAuth={true} requiresAdmin={true} redirectTo="/">
					<MainLayout />
				</ProtectedRoute>
			}>
				<Route path="users" element={<ManageUsers />} />
			</Route>

			<Route element={<LandingLayout />} >
				<Route path="*" element={<NotFound/>} />
			</Route>
		</Routes>
	)
}

export default App;