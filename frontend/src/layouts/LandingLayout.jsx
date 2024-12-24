import { Outlet } from "react-router";
import LandingNavbar from "../components/navbars/LandingNavbar.jsx";

function MainLayout() {
	return (
		<>
			<LandingNavbar />
			<Outlet />
		</>
	)
}

export default MainLayout;