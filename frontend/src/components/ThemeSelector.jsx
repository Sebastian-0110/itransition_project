import { useContext } from "react"; // TODO: Should this be a hook to make this a one-liner instead of a two-liner?
import ThemeContext from "../context/ThemeContext.jsx";

import DarkModeIcon from "../components/icons/DarkModeIcon.jsx";
import LightModeIcon from "../components/icons/LightModeIcon.jsx";

import styles from "../styles/components/ThemeSelector.module.css"

function ThemeSelector() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<div onClick={toggleTheme} className={styles.landscape}>
			<div
				className={`${styles.slider} ${theme === "dark" ? styles["slider-dark"] : styles["slider-light"]}`}
			></div>
			<LightModeIcon className={theme === "light" ? styles["active-theme"] : ""}/>
			<DarkModeIcon className={theme === "dark" ? styles["active-theme"] : ""}/>
		</div>
	)
}

export default ThemeSelector;