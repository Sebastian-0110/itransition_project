import { NavLink } from "react-router";

const activeClass = ({ isActive }) => isActive ? "active": "";

function Navbar() {
	return (
		<>
			<style>
				{ `.active { color: black !important; } `}
			</style>

			<nav>
				<NavLink to="/" className={activeClass}>Home</NavLink>
				<NavLink to="/profile" className={activeClass}>Profile</NavLink>
			</nav>
		</>
	)
}

export default Navbar;