import { useEffect, useState } from "react";

import ThemeContext from "../context/ThemeContext.jsx";

function ThemeProvider({ children}) {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark": "light");
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