import { StrictMode, createContext, useState} from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";

import App from './App.jsx'

import { Provider } from "react-redux";
import store from "./state/store.js";

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<StrictMode>
			<Provider store={store}>
				<App/>
			</Provider>
		</StrictMode>
	</BrowserRouter>,
)
