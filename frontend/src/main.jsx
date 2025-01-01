import { StrictMode, createContext, useState} from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";

import App from './App.jsx'

import { Provider } from "react-redux";
import store from "./state/store.js";
import { selectTheme } from "./state/slices/theme.js";

// Set the initial theme based on the Redux store's default state
const initialTheme = selectTheme(store.getState());
document.documentElement.setAttribute("data-bs-theme", initialTheme);

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<StrictMode>
			<Provider store={store}>
				<App/>
			</Provider>
		</StrictMode>
	</BrowserRouter>,
)
