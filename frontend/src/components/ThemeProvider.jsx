import { useEffect, useState } from "react";

import ThemeContext from "../context/ThemeContext.jsx";

function ThemeProvider({ children}) {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark": "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
	}

	useEffect(() => {
		document.documentElement.setAttribute("data-bs-theme", theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{theme, toggleTheme}}>
			{ children }
		</ThemeContext.Provider>
	)
}

export default ThemeProvider;