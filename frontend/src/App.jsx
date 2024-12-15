import { Routes, Route } from "react-router";

import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

function App() {
	return (
		<Routes>
			<Route element={<MainLayout></MainLayout>}>
				<Route index element={<Home />}/>
				<Route path="profile" element={<Profile />}/>
			</Route>
		</Routes>
	)
}

export default App;