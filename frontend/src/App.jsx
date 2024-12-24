import { Routes, Route, Navigate } from "react-router";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import NotFound from "./pages/NotFound.jsx"
import LandingLayout from "./layouts/LandingLayout.jsx";


function App() {
	return (
		<Routes>
			<Route element={<LandingLayout/>}>
				<Route index element={<Home />}/>

				<Route path="/auth">
					<Route index element={<Navigate to="signup" replace/>}/>
					<Route path="login" element={<Login/>}/>
					<Route path="signup" element={<Signup/>}/>
				</Route>

				<Route path="*" element={<NotFound/>}/>
			</Route>
		</Routes>
	)
}

export default App;