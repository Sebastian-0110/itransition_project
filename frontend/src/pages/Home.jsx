import { useContext } from "react";

import ThemeContext from "../context/ThemeContext.jsx";
import '../styles/App.css'

function Home() {
	const {theme, toggleTheme} = useContext(ThemeContext);

	return (
        <>
	        <h1>This is the home page</h1>
	        <p>The current theme is: {theme}</p>
	        <button onClick={toggleTheme}>Toggle</button>
        </>
	)
}

export default Home
