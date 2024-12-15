import { createContext } from 'react';

const ThemeContext = createContext({
	theme: "light",
	toggleTheme: () => {}, // Defined in ThemeProvider component
});

export default ThemeContext;