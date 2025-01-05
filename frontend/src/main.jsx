import { StrictMode  } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";

import App from './App.jsx'

import { Provider } from "react-redux";
import store from "./state/store.js";
import { selectTheme } from "./state/slices/theme.js";
import { getAuthState } from "src/state/thunks/auth.js";


store.dispatch(getAuthState());

// Set the initial theme based on the Redux store's default state
const initialTheme = selectTheme(store.getState());
document.documentElement.setAttribute("data-bs-theme", initialTheme);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App/>
			</Provider>
		</BrowserRouter>
	</StrictMode>
)
