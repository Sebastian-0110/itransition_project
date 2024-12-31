import { Outlet } from "react-router";
import MainNavbar from "/src/components/navbars/MainNavbar.jsx";

function MainLayout() {
	return (
		<>
			<div className="vh-100 d-flex flex-column">
				<MainNavbar />

				<div className="flex-grow-1">
					<Outlet />
				</div>
			</div>
		</>
	)
}

export default MainLayout;