import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeSlice } from "../state/";

const { selectTheme, themes, toggle } = themeSlice;

import DarkModeIcon from "../components/icons/DarkModeIcon.jsx";
import LightModeIcon from "../components/icons/LightModeIcon.jsx";

import styles from "../styles/components/ThemeSelector.module.css"

function ThemeSelector() {
	const dispatch = useDispatch();
	const theme = useSelector(selectTheme);

	useEffect(() => {
		localStorage.setItem("theme", theme);
	}, [theme]);

	const sliderClass = () => {
		if (theme === themes.dark) return `${styles.slider} ${styles["slider-dark"]}`;
		return `${styles.slider} ${styles["slider-light"]}`
	};

	return (
		<div onClick={() => dispatch(toggle())} className={styles.landscape}>
			<div className={sliderClass()}></div>
			<LightModeIcon />
			<DarkModeIcon  />
		</div>
	)
}

export default ThemeSelector;