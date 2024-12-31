import { Outlet } from "react-router";
import LandingNavbar from "../components/navbars/LandingNavbar.jsx";

function LandingLayout() {
	return (
		<>
			<div className="vh-100 d-flex flex-column">
				<LandingNavbar />

				<div className="flex-grow-1">
					<Outlet />
				</div>
			</div>
		</>
	)
}

export default LandingLayout;